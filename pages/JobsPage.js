/*
----------------------------------------------------
JobsPage.js

Responsibilities:
1. Read all jobs from search page.
2. Extract title, company, experience and location.
3. Open job details page.
4. Perform Easy Apply if possible.
5. Track Already Applied jobs.
6. Track Manual Apply jobs.

Page Object Model:
- Encapsulates all job-related actions.
----------------------------------------------------
*/

class JobsPage {
    constructor(page) {
        // Playwright page instance
        this.page = page;
    }
    // Read all job cards displayed on the search result page
    async getJobs() {
        const jobs = [];
        // Wait for job cards to load completely
        await this.page.waitForTimeout(3000);

        // Locate all job cards on Naukri page
        const cards = this.page.locator('.cust-job-tuple');

        // Get total number of jobs displayed
        const count = await cards.count();

        console.log(`Jobs Found: ${count}`);

        // Loop through each job card and extract details
        for (let i = 0; i < count; i++) {
            try {
                const card = cards.nth(i);
                // Extract Job Title
                const title =
                    (await card
                        .locator('a.title')
                        .textContent()
                        .catch(() => '')) || '';
                // Extract Job company
                const company =
                    (await card
                        .locator('.comp-name')
                        .textContent()
                        .catch(() => '')) || '';
                // Extract Job exprience
                const experience =
                    (await card
                        .locator('.expwdth')
                        .textContent()
                        .catch(() => '')) || '';
                // Extract Job location
                const location =
                    (await card
                        .locator('.locWdth')
                        .textContent()
                        .catch(() => '')) || '';
                // Extract Job Details Page URL
                const link =
                    (await card
                        .locator('a.title')
                        .getAttribute('href')
                        .catch(() => '')) || '';
                // Store all job information in object format
                jobs.push({
                    title: title.trim(),
                    company: company.trim(),
                    experience: experience.trim(),
                    location: location.trim(),
                    link
                });

                console.log(
                    `${i + 1}. ${title} | ${company} | ${experience}`
                );

            } catch (err) {
                // Continue execution even if one job card fails
                console.log(`Unable to read job ${i + 1}`);
            }
        }
        // Return all extracted jobs
        return jobs;
    }
    // Open each job and try Easy Apply
    async apply(job) {
        try {
            console.log(`Opening Job : ${job.title}`);
            // Navigate to job details page
            await this.page.goto(job.link, { waitUntil: 'domcontentloaded' });
            // Wait for page to load completely
            await this.page.waitForTimeout(3000);
            // Read complete page text
            const pageText = await this.page.textContent('body');

            // Already applied
            if (
                pageText &&
                (
                    pageText.includes('Applied') ||
                    pageText.includes('Application Sent')
                )
            ) {
                console.log(`Already Applied : ${job.title}`);

                return 'ALREADY_APPLIED';
            }

            // Locate Easy Apply button
            const applyBtn =
                this.page.locator('button:has-text("Apply")');

            const count = await applyBtn.count();
            // If Apply button exists, click and apply
            if (count > 0) {
                await applyBtn.first().click();
                // Give Naukri time to process application
                await this.page.waitForTimeout(5000);

                console.log(`Applied Successfully : ${job.title}`);

                return 'APPLIED';
            }
            // No Easy Apply button found
            console.log(`Manual Apply Required : ${job.title}`);

            return 'MANUAL';
        } catch (error) {
            // Some jobs may fail due to popup,
            // captcha, external redirect, etc.
            console.log(`Failed : ${job.title}`);

            return 'MANUAL';
        }
    }
}

module.exports = JobsPage;