# planIt (version 1.0)

## About

### Description

planIt is a Trello inspired project management tool designed for service-professionals (e.g. Freelancers, Developers, Accountants, Lawyers etc.). Its purpose is to help organize tasks and deliverables by project, as well as track time and review key productivity metrics. You can access the live app [here](https://plan-it-v1.netlify.app/).

### Key features

The following features exist:
* Save user progress without having to login
* Create multiple projects and tasks with deadlines
* Track time spent on each task
* Review key metrics by visiting your Dashboard

### Project Status

I am constantly looking to improve this project; therefore, this project is currently in development. 

Currently working on the following features:
* Improving user accessibility (i.e. to improve UX when using keyboard or a screen-readers)
* Incorporating semantic HTML elements
* Improving site responsiveness
* Making the site more pixel perfect!

## Getting started

Begin using the app by performing the following:

1. Clone down this repository. You will need `node` or `nodemon` and `npm` installed globally on your machine.

2. Begin running the UI
  * Run `cd client` to get into the client folder
  * Run `npm i` to install dependencies
  * Run `npm start` while in the client folder

3. Begin running the server
  * Run `cd server` to get into the server folder
  * Run `npm i` to install dependencies
  * Run `node index.js` or `nodemon index.js` while in the server folder

4. To visit and use the app:
  * Go to `localhost:3000` on your browser
  * Click on start free trial button to use the app as a guest
  * Create a new project by selecting the `+` button
  * Clicking on the project once it is created to begin adding tasks

## Technology used

The following tech stack was used in the development of planIt:
* HTML5
* CSS
* JavaScript (ES6)
* React
* Node JS
* Express
* MongoDB
* Material-UI library

## Reflection

### How I got started

This project began as a to-do list in jQuery, then evolved into an app identical to Google's Keep app, and now has been transformed into a Trello-like project management app. My project goals included learning how to build a full stack application by incorporating new technologies including Node, Express, and Mongo. 

### The inspiration and journey of planIt

While building this app, I was working at Ernst and Young in a client-facing role that requires working on multiple projects simultaneously. In this role, we are required to submit timesheets on a weekly basis for client billings. When time sheeting at the end of each week, I frequently ran into the dilemma of trying to recall how much time I spent on a task. This was the inspiration behind planIt, where users can track tasks by project and how much time was spent on tasks.

My technical challenge was getting a back-end up and connected as this is the first time I have attempted to integrate React with a Mongo, Node and Express backend. After referring to Node / Mongoose documentation and YouTube tutorials, I was able to get connected and set up! 

My second technical challenge was getting the logic set up for the Timer component, which tracks and saves the time a user has spent on a task. I began by writing out the various scenarios a user can encounter and created a flowchart on paper. Next, I layered on the sequence of necessary events under each scenario. Finally, I coded out my flowchart and used the debugger to resolve bugs that came up.

### Next steps

I am currently working on developing version 2.0 of planIt using my own custom components, instead of relying on the material-UI library. Version 2.0 is also aimed at incorporating coding best practices and accessibility considerations that I learned throughout my bootcamp. You can checkout its repo by clicking [here](https://github.com/KaunainKarmali/plan-it-2.0) and the live version [here](https://just-plan-it.netlify.app/).

## Contribute

Looking for contributors to improve this software's functionality for free users. I would love to hear from you, if you are interested!

## Licence

MIT License

Copyright (c) 2021 Kaunain Karmali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
