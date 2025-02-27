# Playwright Automation Project

## Project Overview

This Playwright project automates APIs and UI end-to-end testing for the Restful APIs and Demoblaze web application. It ensures comprehensive coverage of key functionalities, providing fast and reliable test execution.

## Tech Stack

- Programming Language: TypeScript

- Testing Framework: Playwright

- Package Manager: npm

- Version Control: Git

## Prerequisites

- Node.js: v16.x or higher

- npm: v8.x or higher

- Git: Installed and configured

## Setup Instructions

### Install Dependencies:

- npm install

### Environment Configuration:

- Update the playwright.config.ts file with the appropriate base URL and other test configurations.

- Create .env files for sensitive configurations (if applicable).

### Execution Steps

#### Run Tests: 

- To execute all tests: npx playwright test

- To run a specific test: npx playwright test [test-file-name]

### Generate Test Report:

After running tests, generate a report using: npx playwright show-report

- Run in Headed Mode: npx playwright test --headed

### Debugging:

- Run with debugging options: npx playwright test --debug

### File/Folder Structure

- src/api/: Contains payload configuration related to api test.

- src/function/: Contains all the logic handling related to UI tests.

- src/page/: Contains page objects and atomic methods related to UI objects related to each page.

- test-data/apiData.json/: Contains test data related to API tests.

- test-data/apiHeaders.json/: Contains API header values related to API tests. 

- test-data/env.json/: Contains enviromenvironments related to UI and API.

- test-data/testData.json/: Contains test data related to UI tests. 

- test-data/users.json/: Contains users related to UI and API.

- tests/demoAPI.test.ts/: Contains API tests.

- tests/demoUI.test.ts/: Contains UI tests.

- utils/apiUtils.ts/: Contains rest client builder.

- playwright.config.ts: Playwright configuration file.

### Future Enhancements

- Implement CI/CD pipelines for automated test execution.

- Extend test coverage for edge cases.