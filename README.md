[![Jennifer Payano logo](https://i.imgur.com/A6F7cRJ.png)](https://jenniferpayano.com)

Task Assigner
----------------
* Description
* Wireframe
* Planning and Development
* User Stories
* ERD
* Catalog of Routes
* Technology
* Unsolved Problems
* Set up and Installation
* Images
* Creator

Description
------------
This is a task tracking application user interface written in React by me [Jennifer Payano].
I wanted to create this application to keep track of things that need to get done for a project.
The goal of the application is to write who is responsible for the task, when it is completed, and when it is due.

The deployed user interface application url: https://jenniferpayano.com/Todo-list-Client/

This site API is deployed to: https://task-list-ga.herokuapp.com/


WIREFRAME
---------
- https://imgur.com/a/eOdfBO1
- https://imgur.com/a/wMVL8f2

PLANNING AND DEVELOPMENT
------------------------
To plan this appliction, I knew that I would want to built an application that will help me keep track of task I need to completed for each project. This is a simulation of Jira technology to keep track of user stories. Development included a table in React that meets all the CRUD requirements, in addition once the task is completed the table will show the task crossed accross as a symbol that is completed.

USER STORIES
------------
- As a user I want to sign up into my application
- As a user I want to sign in into my application
- As a user I want to change my password when logged in
- As a user I want to create a task with a project name, description, who is
  responsible, the priority, add comments, mark the due date, and wether it has
  been completed.
- As a user I want the created a task to display on my table
- As a user I want to update the task and its values
- As a user once the task is completed I want to mark it as completed
- As a user I want to delete the tasks that belong to ME if any mistakes have been made.
- As a user I want to sign out of my application when Im done with my task.

ERD
-----------------
https://imgur.com/a/Sysq1no

Catalog of Routes
------------------

Verb         |	URI Pattern
------------ | -------------
GET | /todos
GET | /todos/:id
POST | /todos
PATCH | /todos/:id
DELETE | /todos/:id

TECHNOLOGY
------------
- React


UNSOLVED PROBLEMS
-----------------
- Table is not searchable yet, pending...Material UI table

Set Up and Installation
-----------------------
- Download this template.
- Unzip and rename the template directory (unzip ~/Downloads/todo-list-Client.zip).
- Install dependencies with `npm install`.
- Run the development server with `npm start`.

IMAGES
------
![screenshot](https://i.imgur.com/ClP6FL9.png)
![screenshot](https://i.imgur.com/H927tuy.png)
![screenshot](https://i.imgur.com/9m8tLah.png)
![screenshot](https://i.imgur.com/nBe5CvI.png)
![screenshot](https://i.imgur.com/c0uurwi.png)


CREATOR
---------
Jennifer Payano [www.linkedin.com/in/jenniferpayano]
