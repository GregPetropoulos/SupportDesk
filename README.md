# Support Ticket Services

### [Deployed](https://supportdesk-8110.onrender.com/)

| Enhanced/Add On | [Original Demo](https://youtu.be/OVEQdZ0eIcg) |                             [Enhanced Demo]() ...coming soon                              |
| --------------- | :-------------------------------------------: | :---------------------------------------------------------------------------------------: |
| Enhanced        |                   Basic CSS                   | [TailwindUI](https://tailwindcss.com/docs/installation) & [daisyUI](https://daisyui.com/) |
| Enhanced        |                   User CRUD                   |                                  User/Admin UX Increased                                  |
| Enhanced        |                     Auth                      |                                           Auth                                            |
| Enhanced        |                Submission form                |                             Added format placeholders to form                             |
| Add On          |                     None                      |                             Email submission on status change                             |
| Add On          |                     None                      |                                      Admin Dashboard                                      |
| Add On          |                     None                      |                                     Statistics Chart                                      |
| Add On          |                     None                      |                                            FAQ                                            |
| Add On          |                     None                      |                                        Screenshot                                         |

## Intro

A (MERN) React Redux Toolkit full stack application with jwt authentication, CRUD operations, protected routes, and NoSQL database. Support Ticket Services application is a customer facing product support system to engage with technicians and solve encountered issues

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

The application was created on a macOS BigSur version 11.6.5, MacBook Pro 13 inch with Apple M1 chip. The browser is a Google Chrome Version 100.0.4896.127 (Official Build) (arm64)

In order to handle the version control a local and remote repo were used to handle commits and branches during the project.
Supporting documentation can be found in the [sources](#sources)

## TECHNOLOGIES

### Frontend

- HTML: ReactDOM.Render will pass the Single Page Application through the root element
- CSS: Styling HTML
- JavaScript/JSX: Functional Programming Language across the whole application
- React: UI Library
- Redux ToolKit: Robust State Management
- React Dev Tools

![MERN](./client/src/assets/MERN-stack-1.webp)

### Backend

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

[Deployed](https://supportdesk-8110.onrender.com/)

Support Ticket Services launched on Heroku on 4-29-2022

## ILLUSTRATIONS

### Original Before

Home page
![ogHome](./client/src/assets/ogHome.png)

Login Page
![ogLogin](./client/src/assets/ogLogin.png)
Register Page
![ogRegister](./client/src/assets/ogRegister.png)
New Ticket Page
![ogNewTicket](./client/src/assets/ogNewTicket.png)
View All Of Users Tickets Page
![ogViewTickets](./client/src/assets/ogViewTickets.png)
View One Ticket Page
![ogTicket](./client/src/assets/ogTicket.png)
Add A Note
![ogNote](./client/src/assets/ogNote.png)

### AFTER (enhanced)

JSON Web Token

- Once the token is hashed and salted I verified it on [JSON Web Token](https://jwt.io/)
  ![JWT](./frontend/src/assets/jwt.png)
- Next to confirm the correct user `id` was encrypted in the token, a cross check in the [MongoDB](https://www.mongodb.com/) `user` collection matched
  ![User](./frontend/src/assets/db.png)

## SCOPE OF FUNCTIONALITIES

## Features

- Authentication
- ...

### Authentication

- Registration
- Login
- JSON Web Token

### A users functions include:

- Create a ticket
- View a ticket
- Create a note
- View a note

### An admin user will have future enhancements implemented see [Roadmap](#roadmap)

## EXAMPLE OF USE

## PROJECT STATUS

Currently live and [Deployed](https://supportdesk-8110.onrender.com/) to Heroku, fully functional.

The project will undergo several CI/CD improvements and testing in the dev environment, and afterwards pushed to prod via heroku main branch

## ROADMAP

This project will undergo several enhancements to include

- ~~New styling with TailwindUI~~
- Added UI/UX for Admin/Users
- Added format placeholders to create a ticket form
- Adjusted layout
- Email submission on status change
- Admin Dashboard
- Statistics Chart using D3 API
- FAQ
- Admin role to include:
  - Delete a user
  - Reset a password
  - Any user ticket history
- User role add ons:
  - User can reset password
  - User can delete account
  - User history snapshot 45 days
- Support screenshots
- TBD

## SOURCES

- [MDN]()
- [JSON Web Token](https://jwt.io/)
- [HTML]()
- [CSS]()
- [JavaScript]()
- [React]()
- [Redux ToolKit]()
- [Redux]()
- [Nodejs]()
- [Express]()
- [MongoDB](https://www.mongodb.com/)
- [Mongoose]()
- [Postman]()
- [Git]()
- [Github]()
- [TailwindUI](https://tailwindcss.com/docs/installation)
- [daisyUI](https://daisyui.com/)

## OTHER INFORMATION
