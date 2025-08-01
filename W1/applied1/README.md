---
title: Week 1 Exercises Information
---

## Welcome to the first week of FIT2102!

JavaScript is the language of the web and widely used for both front-end and back-end development.

It is also a _multi-paradigm_ language. It has similar syntax to
imperative languages like C and Java, but also supports anonymous
functions that can be assigned to variables as values. Thus, we can
begin to explore some _functional-style_ programming.

**Please read the [JavaScript Intro](https://tgdwyer.github.io/javascript1/) in the course notes before attempting the exercises.**

**The video lectures on Moodle also provide an introduction.**

## Introduction to the code bundle

For the first half of semester we will be running, testing, and debugging our code in the Chrome browser (results may vary if you use a different browser).

We assume a Chrome browser, Windows desktop, and VSCode text editor. If you have a different type of machine everything should still work but details like how to open files and keyboard shortcuts may vary - we will assume you already know how to do this on your own machine.

We will be using the Node Package Manager `npm` to install our dependencies and the `vite` build tool to run our code and execute tests (you don't need to know what this is, just provided here for context).

Ensure you have installed `npm`. You can follow the [official instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to find how to do this on your operating system.

Each week you will be given a code bundle on Moodle. Once you unzip the bundle onto your local drive there will be a file called `package.json`.

### Running the code bundle

Open a terminal in the folder containing `package.json` (this should be the folder you just extracted).

1. Run `npm install` (installs the dependencies) and
2. `npm run dev` (starts the development server to access our code and tests), then
3. Look in the terminal and go to the url in your browser (e.g. http://localhost:5173/).

### Completing the exercises

The first time you open it you will see lots of red `X` error messages from automated tests. These will go away as we implement solutions to each of the exercises.

This page is the `index.html` file and it loads and tests a file called **src/main.js** which you will edit to complete the exercises. Scroll down to see the test results listed under each exercise description below. We
recommend the [VSCode](https://code.visualstudio.com/) editor to make your changes in **src/main.js**. You may use a different one if you have a strong editor preference.

To start VSCode, hit windows-key and type "code" and press enter.

Inside VSCode, go to File -\> Open Folder... and navigate to where you unzipped the code bundle.

Then click src/main.js in the Explorer to open it. Start writing code and press ctrl-s to save.

After making changes and saving in the editor, the server should automatically restart and refresh your browser page. If it does not, focus your terminal and press `r` to restart the server.
