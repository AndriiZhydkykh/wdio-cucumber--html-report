# JavaScript auto test (webdriverIO +cucumber in the chrome browser +cucumber html report) for site www.telnyx.com
## You can run tests in UI mode, and in headless mode 

## Installation: 
- Install node js v18.9.0 or higher
- Install visual studio code

### In the terminal run this code:
```
npm i
```

## Tests:
### Run this command in a terminal in visual studio code to run the auto tests and get a report:

#### To run all tests in headless mode:
```
npm run test:chrome:headless
```
#### To run all tests in UI mode  :
```
npm run test:chrome
```
#### To run one features in headless mode:

```
npm run test:chrome:headless:OneFile + name features file that you want to be run
```
#### For example: 
```
npm run test:chrome:headless:OneFile header.feature
```
#### To run one features in UI mode:
```
npm run test:chrome:UI:OneFile + name features file that you want to be run
```
#### For example: 
```
npm run test:chrome:UI:OneFile header.feature
```
#### To open the report: 
##### Open the folder report in the project and open index.html file
---
#### Report view

<img width="418" alt="Allure report" src="https://live.staticflickr.com/65535/52476600013_b6da0b0283.jpg">

---
