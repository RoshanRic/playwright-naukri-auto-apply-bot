/*
----------------------------------------------------
config.js

Responsibilities:
1. Store application credentials.
2. Store search keywords.
3. Store search locations.
4. Store experience criteria.
5. Centralize all configuration values.

This file allows users to customize the bot
without changing the framework code.
----------------------------------------------------
*/

require('dotenv').config();

//console.log('EMAIL:', process.env.NAUKRI_EMAIL);
//console.log('PASSWORD:', process.env.NAUKRI_PASSWORD);

module.exports = {
  email: process.env.NAUKRI_EMAIL,
  password: process.env.NAUKRI_PASSWORD,

  keywords: [
    'Playwright',
    'JavaScript',
    'Automation Testing',
    'Selenium Java', 
    
    
  ],

  location: ['pune'],

  minExperience: 6,
  maxExperience: 10,
  
};