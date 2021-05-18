---
id: index
title: Index
sidebar_label: Index of Projects
slug: /
---

This page contains the list of almost all the projects built by me. All projects have a dedicated page about them, which contains other relevant details about the project.

In order to easily filter projects based on tech stack, please checkout the [Filter](https://github.com/yashkumarverma/) page (under construction). If while opening the link of some project, you get a 404, it means that the codebase is private (mainly due to academic submissions). These are made public as soon as the semester in college ends.

## NPM Packages
- [http-exception-transformer](https://www.npmjs.com/package/http-exception-transformer) : express.js middleware to handle all sorts of errors in the application and generate a suitable response codes alongwith messages for the client. Also allows users to run custom functions when error encountered.  Read More 🔗
- [@uniauth/express-middleware](https://www.npmjs.com/package/@uniauth/express-middleware) : library to integrate [UniAuth](https://github.com/uniauth) based OAuth servers with applications written in express.js.
- [@hackcode/file-preview-page](@hackcode/file-preview-page) : CLI to generate index page, listing all files and linking them to index.html recursively. Very handy when sharing files via cloud storages like surge.sh, firebase, netlify, vercel, etc.
- [@hackcode/env-example-generator](https://www.npmjs.com/package/@hackcode/env-example-generator) : CLI to generate a .env.example file to list down all environment variables being used by the project. Feature to ignore the variable if variable is commented out as well.
- [@vitspot/vit-registration-number](https://www.npmjs.com/package/@vitspot/vit-registration-number) : A library intended to be used by communities in VIT University, to validate and extract meaningful information from student registration numbers.
- [javascript-templates](https://www.npmjs.com/package/javascript-templates): a CLI to quickly setup boilerplate for NodeJS Project.

## CLI
- [ARQ Simulators](https://github.com/YashKumarVerma/arq-simulators) : Network Simulators written in C++ which demonstrate how the control protocols work in data transmission. Also include features to add noise to the channel and randomly eliminate packets from the medium, just like it happens in real-world.


- [Github Spy](https://github.com/YashKumarVerma/github-spy) : is a CLI which allows a user to list down the organizations they are part of, and then further collect analytics about the same.


- [Go Do SQL](https://github.com/YashKumarVerma/go-do-sql) : is a CLI written in GoLang to assist in database labs, when our team was working on separate languages. It was becoming difficult to convert one syntax to another (Oracle -> MySQL etc). This CLI provides an interactive interface with **auto-complete** feature to generate commands which define the schema of the table, and then feed data into it, without actually knowing the particular syntax.

- [bird-nest](https://github.com/YashKumarVerma/bird-nest) : is an interactive CLI written in GoLang with auto-complete feature that allows [NestJS](https://nestjs.com/) users to create a new module by defining the schema in a SQL-style format. The CLI converts the schema into classes and writes them to disk as a new nest-js module.


- [Bash Screenshot Manager](https://github.com/YashKumarVerma/bash-screenshot-manager) : is a shell script that was written towards the early days of the pandemic, when online classes has just started, and it was being difficult to handle screenshots of class notes. I wrote this script to categorize the screenshots based on subjects and collected them in different folders.


- [COVID Chatbot](https://github.com/YashKumarVerma/Winter2019-20-CBS1002-1009-Simple-ChatBot) : is a chatbot written in C++ as an academic project submitted for Object Oriented Programming Class. It fetches data from a remote JSON API, and then shows it to the user. The response and actions are mapped via regex. 


- [COVID Chatbot Server](https://github.com/YashKumarVerma/oops-project-server ): To avoid implementing a fully-functional JSON parser for COVID Chatbot (the above project), an intermediate site was published which parsed the JSON response of the API and converted it to ini format, which is comparatively easier to read. 


- [Go Make COVID Graph](https://github.com/YashKumarVerma/go-make-covid-graph) : was one of my first GoLang projects. It fetches the COVID stats API in india and then visualizes the number of cases in the terminal itself.


- [go-short-cut-url](https://github.com/YashKumarVerma/go-short-cut-url) : a learning project written in GoLang to short URLs. Built following a tutorial.

- [argument-parser-cpp](https://github.com/YashKumarVerma/argument-parser-cpp) : a library written for C++ projects to quickly check if given parameter has been passed to the CLI or not, and provide an easy method to parse the passed input.


- [MakeMake](https://github.com/YashKumarVerma/MakeMake) : is a makefile generator written in C++ which can automatically generate makefiles for a given project structure. This allows the developer to quickly prototype the project without worrying about defining strict build commands.


- [rainbowcpp](https://github.com/YashKumarVerma/rainbowcpp) : is a library written for C++ projects to format the output that is sent to the terminal. It provides functions like bold, italic, underline, alongwith a wide range of colors that can be used together. 


- [Sahayak-BlogGen](https://github.com/YashKumarVerma/Sahayak-BlogGen) : is a learning project built in pre-university years which powered my personal blog at the time. Written in python and supports dynamic routing for blog posts via javascript.


## Bots
- [FormatCodeBot](https://github.com/YashKumarVerma/FormatCodeBot) : is a telegram bot which can style javascript code sent by users. Built as a requirement for reviewing code being shared over messaging applications.


- [ensure-compliance-instagram](https://github.com/YashKumarVerma/ensure-compliance-instagram) : a browser automation bot that has the ability to download instagram stories put by people and save them locally to disk.


- [yashkumarverma-assistant](https://github.com/YashKumarVerma/yashkumarverma-assistant) : personal github assistant implemented as a github bot that greets new contributors, and drops messages when issues and pull requests change their status. i.e. opened, closed, merged etc.
  
## WebApps
- [All Covid Info](https://github.com/YashKumarVerma/all-covid-info-frontend) : a gatsby single page application, which has the ability to install as a PWA and run even without active internet connection to list resources for COVID care.


- [Snake-Game](https://github.com/YashKumarVerma/Snake-Game) : A browser game written in high school which resembles the popular snake game. Written in pure HTML, CSS and vanilla JavaScript.

## AI
- [Wumpus World Simulation](https://github.com/YashKumarVerma/wumpus-world-simulation) : a command line simulator of the famous wumpus world problem which demonstrates how a partially informed agent behaves as obstructions and challenges are presented in random intervals. Written in python, uses unicode emojis to visualize the world.


- [news-vocabulary-dataset](https://github.com/YashKumarVerma/news-vocabulary-dataset) : data harvested from top news sites in India. It's a dataset of words and article URLS available in a sql format for quick imports.

## Tooling, DevEX, Research
- [project-os-healing-os](https://github.com/YashKumarVerma/project-os-healing-os) : is a prototype process runner which has the ability to relaunch itself when process crashes. It also keeps in sync with other nodes running in the cluster to ensure that all the machines running on the cluster are always in sync with each other. A component needs to be setup on client machines, called [self-healing-remote](https://github.com/YashKumarVerma/self-healing-remote) which essentially makes any unix device a part of the cluster. It used public github repositories as a central config storage.


- [go-lib-ui](https://github.com/YashKumarVerma/go-lib-ui) : is a handy terminal output library written in GoLang to enforce a structure in the data printed by the terminal. Used in other golang projects.


- [rainbow-java](https://github.com/YashKumarVerma/rainbow-java) : JAVA port of rainbow-cpp, provides similar functionality like text formatting and support for colors in the terminal itself.


- [react-native-shots](https://github.com/YashKumarVerma/react-native-shots) : is a shell script written during the MLH fellowship to setup react native development environment on a local machine. This was created to handle the long sequence of commands that were confusing to operating as minor misses caused the build to fail.


- **Shatabdi** : Shatabdi.js is a prototype phase nodejs framework, which has syntax similar to express.js re-written from the ground up. It is built for performance, and beats express.js in performance tests.
  - [shatabdi-express](https://github.com/YashKumarVerma/shatabdi-express) : main codebase of the framework, supports basic HTTP requests and limited middleware support.
  - [shatabdi-express-performance](https://github.com/YashKumarVerma/shatabdi-express-performance) : shows off the performance comparison of express.js and shatabdi.js applications which implement the same functionality using the npm artillery module.  
  - [shatabdi-express-rewrites](https://github.com/YashKumarVerma/shatabdi-express-rewrites) : 🚧 under process. An example to demonstrate how express applications can be directly ported to shatabdi applications.


- [Blazing](https://github.com/YashKumarVerma/Blazing) : Blazing is a PHP MVC framework written keeping in mind the challenges that beginners face in using large frameworks like Laravel, CodeIgniter, CakePHP etc. This framework was written in my high school days, and later an ERP (private codebase) for a C.B.S.E. school was also written on it.


- [Path-Finder](https://github.com/YashKumarVerma/Path-Finder) : Path finder was an interactive UI written in JavaScript which allows the user to find a path from the starting node to final node by drawing custom boundaries in the canvas, and then run a time-based bot for the same. Build this around high school.


- [Clean-Deploy](https://github.com/YashKumarVerma/Clean-Deploy) : is a CI script intended written during the time of Google CodeIn to delete all unwanted files dynamically during deployment. This made the deployments considerably fast and allowed us to save server space.


- [simple-rbs](https://github.com/YashKumarVerma/simple-rbs) : is a prototype that demonstrates how a simple RBAC authorization  can be setup in NodeJS. The roles are defined using the concept of inheritance, as it commonly observed in organizations. Higher order roles automatically get the rights of lower order roles. It also demonstrates how a caching layer can be added to any function by adding just a single line.

## Mobile Apps
- [Weather Application](https://github.com/YashKumarVerma/hackathon-apptitude) : a mobile application developed during a hackathon named "Apptitude". The restrictions were well defined and the main challenge was the time frame of the delivery.  

## Full Stack Applications
- Attendance Application : is a portal written for internal consumption at ACM-VIT that allows the club to quickly create events, sessions and slots for attendance. It provisions a rich REST API that can be used by other clients, like mobile applications or web pages to feed data into the system. All the details are then stored on a central server and used for analytics purposes.
  - [attendance-frontend](https://github.com/YashKumarVerma/attendance-frontend) : first ReactJS project, consumes the API provided by attendance-backend to visualize a user interface with all features required to operate on the portal.
  - [attendance-backend](https://github.com/YashKumarVerma/attendance-backend) : first TypeScript project, exposes a REST API that is consumed by the frontend to operate on the data points.


- Executely : full stack application build during the MLH Fellowship Orientation Hackathon, and bagged the first prize in the same. It allows users (mostly students) to upload picture of their hand-written code and execute without installing any application.
  - [0.4.1-Execute.ly-server](https://github.com/YashKumarVerma/0.4.1-Execute.ly-server) : server that powers the project, handles data interaction with google cloud and cloud vision APIs, language detection, code execution and OCR processing of the data shared by the frontend.
  - [0.4.1-Execute.ly-frontend](https://github.com/YashKumarVerma/0.4.1-Execute.ly-frontend) : allows the user to upload an image, crop the required portions of the image, and send data tot he server for processing. Once received, allows the user to edit the code and re-run as required.


- Coalaborate: since during the pandemic time, all activities have moved online, including team collaboration, academics, research and communication. Coalaborate allows people to use the internet as their notebook, and allows people in the same team to drop comments on any website. Teams can communicate, drop notes, questions and solve queries via the platform. 
    - https://github.com/YashKumarVerma/coalaborate-backend exposes the API that is consumed by the chrome extension. Internally its written in typescript and uses apache cassandra as the data layer. 
    - https://github.com/YashKumarVerma/coalaborate-frontend : is a chrome extension which can be installed on browsers written on the chromium engine (Chrome, Edge, Brave etc), and allows the users to drop comments for their team members on any website/webapp.


- Coin360
  - https://github.com/YashKumarVerma/coin360-backend
  - https://github.com/YashKumarVerma/coin360-frontend
- Octave: https://github.com/YashKumarVerma/Octave
- Dolos: https://github.com/YashKumarVerma/dolos
- ACM Recruitments: https://github.com/YashKumarVerma/recruitment-backend
- ACM Reverse Coding
  - https://github.com/YashKumarVerma/rc-heimdall
  - https://github.com/YashKumarVerma/rc-broadcaster
  - https://github.com/YashKumarVerma/rc-deploy-listener
  - https://github.com/YashKumarVerma/rc-ide
  - https://github.com/YashKumarVerma/rc-task-runner
- VITHack
  - https://github.com/YashKumarVerma/vithack2020-portal-backend
  - https://github.com/YashKumarVerma/vithack2020-subscribe-service
- https://github.com/YashKumarVerma/songs-site

## Team
- https://github.com/C4-Smoketrees/forum-backend
- 
## Hentry


## UniAuth
- https://github.com/UniAuth/uniauth-backend
- https://github.com/UniAuth/express-middleware
- https://github.com/UniAuth/http-exception-transformer
- https://github.com/UniAuth/example-nodejs
- https://github.com/UniAuth/fiber-middleware
- https://github.com/UniAuth/uniauth.github.io
- https://github.com/UniAuth/django-middleware
- https://github.com/UniAuth/flask-middleware
- https://github.com/UniAuth/example-flask
- https://github.com/UniAuth/UniAuth
- https://github.com/UniAuth/gin-middleware
- https://github.com/UniAuth/uniauth-passport-strategy
