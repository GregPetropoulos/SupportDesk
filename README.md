# Support Ticket Services

## [Deployed](https://support-desk-services.herokuapp.com/)
## Demo
## Intro
A (MERN) React Redux Toolkit full stack application with jwt authentication, CRUD operations, protected routes, NoSQL database. Support Ticket Services is customer facing product support system to engage with technicians and solve encountered issues 

## Table of Contents

- [INTRO](#intro)
- [SMEAC](#smeac)
- [TECHNOLOGIES](#technologies)
- [LAUNCH](#launch)
- [ILLUSTRATIONS](#illustrations)
- [SCOPE OF FUNCTIONALITIES](#scope-of-functionalities)
- [EXAMPLE OF USE](#example-of-use)
- [PROJECT STATUS](#project-status)
- [SOURCES](#sources)
- [OTHER INFORMATION](#other-information)

## SMEAC

#### (Situation, Mission, Execute, Admin, Comm)

### Situation

Once the user encounters an issue with a product then it's the support services that will improve the users overall experience. The Support Ticket Services serves as a customer facing open line of communication and product troubleshooting. When a user needs help with product support the user submit's a ticket to Support Ticket Services. A users product experience will help increase revenue and improve company reputation and business relationships.

### Mission

Support Ticket Services role is to solve and report issues within 24 hours, when a product issue is encountered by a user. STS will assist in solving any reported issue hours. Once a ticket is submitted by a user, a staff member will attempt to solve it through product documentation and troubleshooting steps. A staff member and user can create a note on the ticket and close it if solved.

### Execution

The user must register and log into Support Ticket Services application and submit a ticket. The user will need to select product item from the dropdown box and write a detailed description of the issue. After a ticket is submitted, a user can post additional notes. 

The format includes:

- Problem Statement
- Device and Version
- Browser and Version
- Reproduction Steps
- Expected Outcome
- Actual Outcome
- Notes
- Screenshot


A staff member will see the list of tickets as a "new" and address the issue and create a note on the ticket as they are working through the debugging process. The steps for the staff member to solve the issue are included in this order:

- Utilize Product Documentation
- Reproduce The Issue
- If all resources are exhausted then escalate to jira for dev work

### Admin/Logistics
The application was created on a macOS BigSur version 11.6.5, MacBook Pro 13 inch with Apple M1 chip. The project idea stemmed from a Udemy course. The browser is a Google Chrome Version 100.0.4896.127 (Official Build) (arm64)

In order to handle the version control a local and remote repo were used to handle commits and branches during the project.

## TECHNOLOGIES

Frontend
- HTML: ReactDOM.Render will pass the Single Page Application through the root element
- CSS: Styling HTML
- JavaScript/JSX: Functional Programming Language across the whole application
- React: UI Library
- Redux ToolKit: Robust State Management
- React Dev Tools

![MERN](./src/assets/MERN-stack-1.webp)

Backend
- Nodejs: Runtime
- Express: Backend Framework, handles endpoints
- MongoDB: Database stores collections
- Mongoose: ODM Object Data Mapper through Express
- Postman: Ground truthing routes and request/response objects

Version Control
- Git
- Github Repo for the remote repository
IDE
- VSCODE with several extensions

## LAUNCH
Support Ticket Services launched on Heroku on 4-29-2022
[Deployed](https://support-desk-services.herokuapp.com/)

## ILLUSTRATIONS

## SCOPE OF FUNCTIONALITIES
Authentication
- Registration
- Login
- JSON Web Token
A users functions include:
- Create a ticket
- View a ticket
- Create a note
- View a note
- An admin user will have future enhancements implemented see [Roadmap](#roadmap)

## EXAMPLE OF USE

## PROJECT STATUS
 Deployed on to Heroku and fully functional. The project will undergo CI/CD with several improvements in the dev environmen, tested and pushed to prod via main

## ROADMAP
This project will undergo several enhancements to include
 - New styling with TailwindUI
 - Added staff UI/UX
 - TBD

## SOURCES
- [MDN]()
- [JSON Web Token]()
- [HTML]()
- [CSS]()
- [JavaScript]()
- [React]()
- [Redux ToolKit]()
- [Redux]()
- [Nodejs]()
- [Express]()
- [MongoDB]()
- [Mongoose]()
- [Postman]()

## OTHER INFORMATION
