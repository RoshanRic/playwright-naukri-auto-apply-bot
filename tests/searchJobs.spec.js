/*
----------------------------------------------------
searchJobs.spec.js

Test Flow:
1. Login to Naukri.
2. Search jobs using configured keywords.
3. Search jobs for configured locations.
4. Extract all available jobs.
5. Filter jobs based on experience.
6. Auto apply to Easy Apply jobs.
7. Track Manual Apply jobs.
8. Generate Excel reports.

This is the main orchestrator file of the framework.
----------------------------------------------------
*/


const { test } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const SearchPage = require('../pages/SearchPage');
const JobsPage = require('../pages/JobsPage');

const config = require('../utils/config');

const {
  writeJobs
} = require('../utils/excelHelper');

const {
  isExperienceMatch
} = require('../utils/experienceHelper');

test('Search and extract jobs from Naukri', async ({ page }) => {
  test.setTimeout(300000);

  const login = new LoginPage(page);
  const search = new SearchPage(page);
  const jobsPage = new JobsPage(page);

  const allJobs = [];
  const appliedJobs = [];
  const manualJobs = [];
  const alreadyAppliedJobs = [];

  // Login
  await login.login(
    config.email,
    config.password
  );

  // Search for all keywords and locations
  for (const keyword of config.keywords) {
    for (const location of config.location) {
      console.log(
        `Searching: ${keyword} - ${location}`
      );

      await search.search(
        keyword,
        location
      );

      const jobs =
        await jobsPage.getJobs();

      console.log(
        `Found ${jobs.length} jobs`
      );

      const filteredJobs =
        jobs.filter(job =>
          isExperienceMatch(
            job.experience,
            config.minExperience,
            config.maxExperience
          )
        );

      console.log(
        `Experience matched jobs: ${filteredJobs.length}`
      );

      allJobs.push(...filteredJobs);

      // Apply on filtered jobs
      for (const job of filteredJobs) {
        const status =
          await jobsPage.apply(job);

        if (status === 'APPLIED') {
          appliedJobs.push(job);
        }

        if (status === 'MANUAL') {
          manualJobs.push(job);
        }

        if (
          status === 'ALREADY_APPLIED'
        ) {
          alreadyAppliedJobs.push(job);
        }
      }
    }
  }

  // Generate reports
  writeJobs(
    allJobs,
    './reports/jobs.xlsx'
  );

  writeJobs(
    appliedJobs,
    './reports/appliedJobs.xlsx'
  );

  writeJobs(
    manualJobs,
    './reports/manualApply.xlsx'
  );

  writeJobs(
    alreadyAppliedJobs,
    './reports/alreadyApplied.xlsx'
  );

  console.log(
    '--------------------------------'
  );
  console.log(
    `Total Matched Jobs : ${allJobs.length}`
  );
  console.log(
    `Applied : ${appliedJobs.length}`
  );
  console.log(
    `Manual Apply : ${manualJobs.length}`
  );
  console.log(
    `Already Applied : ${alreadyAppliedJobs.length}`
  );
  console.log(
    '--------------------------------'
  );

  console.log('All Jobs:', allJobs.length);
  console.log('Applied Jobs:', appliedJobs.length);
  console.log('Manual Jobs:', manualJobs.length);
  console.log('Already Applied:', alreadyAppliedJobs.length);

  console.log('Writing Excel files...');
});