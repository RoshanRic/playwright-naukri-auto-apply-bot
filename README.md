## Disclaimer

This project is intended for educational and personal automation purposes only. Users are responsible for complying with Naukri's terms of service and using the automation responsibly.

# 🚀 Naukri Auto Apply Bot

A Playwright + JavaScript automation bot that automatically searches and applies to relevant jobs on Naukri.

## Features

- Login to Naukri
- Search by multiple keywords
- Search by multiple locations
- Experience-based filtering
- Auto Apply for Easy Apply jobs
- Manual Apply tracking
- Excel report generation

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Page Object Model (POM)

## Installation

```bash
git clone <repo-url>
cd naukri-job-bot
npm install
```

Create `.env`:

```env
NAUKRI_EMAIL=your_email
NAUKRI_PASSWORD=your_password
```

Run:

```bash
npx playwright test --headed
```

## Folder Structure

```text
pages/
tests/
utils/
reports/
```