/*
----------------------------------------------------
SearchPage.js

Responsibilities:
1. Build dynamic Naukri search URLs.
2. Search jobs using keyword and location.
3. Navigate directly to search result pages.
4. Wait for job listings to load.

Examples:
- Playwright jobs in Kolkata
- Automation Testing jobs in Pune
- Selenium jobs in Bangalore
----------------------------------------------------
*/

class SearchPage {
  constructor(page) {
    this.page = page;
  }

  async search(keyword, location) {

    // Convert values to URL-safe strings
    // Example:
    // "Automation Testing" -> "Automation%20Testing"
    const searchKeyword = encodeURIComponent(keyword);
    const searchLocation = encodeURIComponent(location);

    // Build Naukri search URL dynamically
    const url = `https://www.naukri.com/${searchKeyword}-jobs-in-${searchLocation}`;

    console.log('Navigating to:', url);
    
    // Open search result page
    await this.page.goto(url, {waitUntil: 'domcontentloaded'});

    // Give page time to load job cards completely  
    await this.page.waitForTimeout(5000);

    console.log('Current URL:', this.page.url());
  }
}
module.exports = SearchPage;