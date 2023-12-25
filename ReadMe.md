# browserstack task
## Summary
This is repository for Browserstack task. Tested app bundled with repository.  
[Test cases list](https://docs.google.com/spreadsheets/d/1ihla-asq8CCOzOSLN5fBby0cy_RXw1QmiHMka2wvNCQ/edit?usp=sharing)  
## Requirements
[Node LTS](https://nodejs.org/) (18.14.2 or higher)  
[Java](https://www.oracle.com/java/technologies/downloads/#java8) (8 or higher)  
## Installation
1. Clone this repo, run `npm install`;
2. Create `.env` file with all needed data (refer to `.env.example`);
3. You're good to go!
## Tests launch
There are multiple launch options:
1. `npm run wdio:pixel3` — run all tests on Google Pixel 3 — *this is main launch option*;
2. `npm run wdio:pixel2` — run all tests on Google Pixel 2;
3. `npm run wdio:note` — run all tests on Samsung Galaxy Note 10;
4. `npm run wdio:allure` — run all tests on Google Pixel 3, reporter: Allure;
5. `npm run allure:open` — open local Allure report.
## To submit a bug report:
Navigate into **Issues** tab, click on "**New issue**" button. Follow this template:
1. Title;
2. Description;
3. Steps to reproduce;
4. Expected behavior;
5. Actual behavior;
6. Screenshots;
7. Additional details.
