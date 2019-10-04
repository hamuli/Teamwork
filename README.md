# Teamwork
[![Coverage Status](https://coveralls.io/repos/github/hamuli/Teamwork/badge.svg?branch=develop)](https://coveralls.io/github/hamuli/Teamwork?branch=develop)
[![Build Status](https://travis-ci.org/hamuli/Teamwork.svg?branch=develop)](https://travis-ci.org/hamuli/Teamwork)
## Platform Description
Teamwork is an internal social network for organizations’ employees. The goal of this
application is to facilitate more interaction between colleagues and facilitate team bonding.


## Features
1. Employees can create their own user account.
2. Employees can sign in.
3. Employees can write and/or share articles with colleagues on topics of interest to them.
4. Employees can edit their articles.
5. Employees can delete their articles.
6. Employees can comment on other colleagues' article post.
7. Employees can view all articles showing the most recently posted articles first.
8. Employees can view a specific article.

## User interface links
- For accessing the users side : [visite page here](https://hamuli.github.io/Teamwork/ui)

## API Endpoints Specifications

- Api Roots : freementors-app.herokuapp.com/api/v2

| Endpoint | Request | Status | Description |
| --- | --- | --- | --- |
| / | GET | 200 OK | Helps users to access to the root of the api |
| /auth/signup | POST | 201 OK | Makes a post request to register a new user and return token |
| /auth/signin | POST | 200 OK | Sign in an existing user and return token |
| /articles | post| 200 OK | For employee to post articles |
| /articles/:id | PATCH | 200 OK | For user to  to edit their articles |
| /delete/:id|  DELETE | 200 OK | for user to delete a post  |
| /articles| GET | 200 OK | For displaying all article |
| /articles/| GET | 200 OK | For display one post with all comments  attached to it|
| /articles/:id/| POST | 200 OK | For employee to add a comment to a post|

## Tools

Tools used for development of this API are;
- Framework: [ExpressJS](http://expressjs.com/).
- Code Editor/IDE: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- API Testing environment: [Postman](https://www.getpostman.com).


## Getting Started
Clone the Repo.
-------------
`git clone https://github.com/hamuli/Teamwork.git`
`cd teamwork`
`npm start`

## Prerequisites
The following tools will be needed to run this application successfully:
- Node v10.15.0 or above
- Npm v6.4 or above

## Deployment

- Github Pages : https://hamuli.github.io/Teamwork/ui

## Api Documentation

## Key Contributor

- glodie hamuli

## Acknowledgements

- Andela Homestudy : https://homestudy.andela.com

