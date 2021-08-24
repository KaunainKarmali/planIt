# planIt (version 1.0)

## About

### Description

planIt is a trello-inspired project management tool specific designed for service-professionals (e.g. Freelance workers, Developers, Accountants, Lawyers etc.). The purpose of this tool is to help professionals organize their key tasks, deliverables, goals while providing time tracking and provide real time statistics. You can access the live app [here](https://plan-it-v1.netlify.app/).

### Key features

The following features exist:
* Save user progress without having to login
* Creation of multiple projects, and tasks with deadlines
* Time tracking at a task level
* Dashboard providing key statistics

### Project Status

This project is currently in development. Currently working on improving user accessibility (i.e. to improve UX when using keyboard or a screen-reader), using more semantic HTML elements, improving site responsiveness, and making the site more pixel perfect!

## Getting started

Begin using the app by performing the following:

Clone down this repository. You will need `node` or `nodemon` and `npm` installed globally on your machine.

Begin running the UI
* Run `cd client` to get into the client folder
* Run `npm i` to install dependencies
* Run `npm start` while in the client folder

Begin running the server
* Run `cd server` to get into the server folder
* Run `npm i` to install dependencies
* Run `node index.js` or `nodemon index.js` while in the server folder

To visit and use the app:
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
This project began as a to-do list, then was converted into an app identical to Google's Keep app, and now has been transformed into a trello-like project management app. Project goals included learning how to build a full stack MERN application before I began bootcamp at Juno College of Technology. 

Originally, I made a simple to-do app with jquery, then converted that into vanilla JS to build on my learning. Eventually, I was exposed to React during a udemy course which inspired me to build Google Keep following online tutorials. 

### The inspiration and journey of planIt

While learning and building this app, I was working at Ernst and Young where we are required to work on multiple client projects and deliverables simultaneously and required to submit timesheets on a weekly basis for client billings. At the end of each week, I frequently ran into the dillemma of estimating how much time I spent on a task to complete timesheets and to reflect on my efficiency. This was the inspiration behind planIt, where users are able to track tasks by project and how much time was spent on tasks before reviewing it on the Dashboard.

My technical challenge was getting a back-end up and connected as this is the first time I have attempted to integrate React with a Mongo, Node and Express backend. After several youtube tutorials and referring to Node / Mongoose documentation online, I was able to get connected and set up! 

My second technical challenge was getting the logic set up for the Timer component, which tracks and saves the amount of time a user has spent on a task. To overcome this challenge, I wrote out the various scenarios a user can encounter and created a flowchart on paper to describe the sequence of necessary events that must occur under each scenario.

### Next steps

I am currently working on making version 2.0 of planIt using my own custom components, instead of relying on material-UI library. Version 2.0 is also aimed at incorporating coding best practices that I learned throughout my bootcamp. You can checkout its repo by clicking [here](https://github.com/KaunainKarmali/plan-it-2.0) and the live version [here](https://just-plan-it.netlify.app/).

## Contribute now

Looking for contributors to improve this software's functionality for free users.

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
