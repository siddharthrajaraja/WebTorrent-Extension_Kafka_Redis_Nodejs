# TESTING DOCUMENTATION

_NOTE : TESTING ENV AND PRODUCTION ENV ARE SEPARATE_

- Make sure you have latest node js setup in your system.
- `./test` directory has several testing.js files written
- In `package.json` file has `scripts` key containing `jest` so use `npm test` to run all test files.
- `mongoConnect.test.js` is written to test MongoDB Connection with ATLAS cloud storage. It takes all the ENV variables from testENV.js.
