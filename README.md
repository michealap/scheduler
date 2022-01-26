# Interview Scheduler

## Introduction 
Scheduler is a Single Page App where:
- User can switch between days
- User will be shown the remaining spots for the day
- User can book, edit and cancel appointments between 12pm to 5pm
- User will be shown error message based on their input or selection
- User is shown a status indicator while asynchronous operations are in progress.
- User will be shown the updated spots after booking without a page refresh.

## Final Product 

### Select any day between Monday - Friday
!["Selected Friday with only 1 spot remaining"](https://github.com/michealap/scheduler/blob/master/public/docs/selected-day.PNG?raw=true)

### Delete functionality after hovering over a highlighted appointment
!["Confirm dialog"](https://github.com/michealap/scheduler/blob/master/public/docs/confirm-delete.PNG?raw=true)
!["Empty appointment slot/update nav bar"](https://github.com/michealap/scheduler/blob/master/public/docs/more-spots-delete.PNG?raw=true)

### Edit functionality
!["Display form"](https://github.com/michealap/scheduler/blob/master/public/docs/edit-feature.PNG?raw=true)
!["Display edit changes"](https://github.com/michealap/scheduler/blob/master/public/docs/1PM-updated.PNG?raw=true)

## Technical Specifications
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library
- The Scheduler client application created using Create React App. 
- Express is the basis for the Scheduler API server application => https://github.com/michealap/scheduler-api 
- Optional: For a test scheduler(2 days), use command ```npm run test:server ``` otherwise ```npm start```
- Both servers run concurrently; requests are proxied from the Webpack development server to the API server.

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
