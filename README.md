## Disclaimer

This project is intended for educational and personal automation purposes only. Users are responsible for complying with Naukri's terms of service and using the automation responsibly.

# 🚀 Naukri Auto Apply Bot

A Playwright + JavaScript automation bot that automatically searches and applies to relevant jobs on Naukri based on configurable criteria such as:

- Keywords
- Location
- Experience
- Easy Apply jobs

The bot also generates Excel reports for all matched jobs and tracks application status.

---

# 🎯 Why I Built This

Applying to jobs manually on job portals can be repetitive and time-consuming.

This project automates the job search and application process by:

✅ Searching jobs automatically

✅ Filtering jobs based on experience

✅ Applying to Easy Apply jobs

✅ Tracking Manual Apply jobs

✅ Generating Excel reports

The idea was to build a real-world automation project using Playwright and JavaScript while solving a practical problem.

---

# ✨ Features

- Login to Naukri
- Search by multiple keywords
- Search by multiple locations
- Experience-based filtering
- Auto Apply for Easy Apply jobs
- Manual Apply tracking
- Already Applied detection
- Excel report generation
- Page Object Model (POM) implementation
- Environment variable support

---

# ⚙️ Tech Stack

- Playwright
- JavaScript
- Node.js
- XLSX
- Dotenv
- Page Object Model (POM)

---

# 📂 Framework Structure

```text
naukri-job-bot
│
├── pages
│   ├── LoginPage.js
│   ├── SearchPage.js
│   └── JobsPage.js
│
├── tests
│   └── searchJobs.spec.js
│
├── utils
│   ├── config.js
│   ├── excelHelper.js
│   └── experienceHelper.js
│
├── reports
│   ├── jobs.xlsx
│   ├── appliedJobs.xlsx
│   ├── manualApply.xlsx
│   └── alreadyApplied.xlsx
│
├── .env.example
├── package.json
├── playwright.config.js
└── README.md
```

---

# 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/RoshanRic/playwright-naukri-auto-apply-bot.git
cd playwright-naukri-auto-apply-bot
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# 🔐 Environment Setup

Create a `.env` file:

```env
NAUKRI_EMAIL=your_email_here
NAUKRI_PASSWORD=your_password_here
```

---

# ⚙️ Configuration

Update:

```javascript
utils/config.js
```

Example:

```javascript
keywords: [
  'Playwright',
  'Automation Testing',
  'JavaScript'
],

location: [
  'Kolkata',
  'Bangalore',
  'Pune'
],

minExperience: 5,
maxExperience: 10
```

---

# ▶️ Run the Bot

```bash
npx playwright test tests/searchJobs.spec.js --headed
```

---

# 📊 Generated Reports

The bot automatically generates:

- jobs.xlsx
- appliedJobs.xlsx
- manualApply.xlsx
- alreadyApplied.xlsx

---

# 🎥 Demo

Add your demo GIF or video here.

Example:

![Demo](demo.gif)

---

# 🔮 Future Enhancements

- Email notification support
- Resume upload support
- LinkedIn job automation
- Docker support
- Scheduling with GitHub Actions
- Telegram notification support
- AI-based job matching

---

# 📌 Disclaimer

This project is intended for educational and personal automation purposes only.

Users are responsible for complying with Naukri's Terms of Service and using the automation responsibly.

---

# 👨‍💻 Author

**Roshan Kumar**

Senior QA Automation Engineer

Tech Stack:
Playwright | JavaScript | Selenium | Java | API Testing

LinkedIn:
www.linkedin.com/in/roshan-ric

GitHub:
https://github.com/RoshanRic
reports/
```
