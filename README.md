# README #

This README would normally document whatever steps are necessary to get your application up and running.

### Contact List App - Coding Challenge - CauseCode Technologies Pvt. Ltd ###

* Rest Client to make HTTP Get, Post, Put and Delete requests
* Version 1.0

![Conatct.png](https://bitbucket.org/repo/RE7pGR/images/3693849240-Conatct.png)


# Steps to setup Restful API to make HTTP Get, Post, Put and Delete requests #


## Dependencies ##

This repo contains the code for a RESTful API Contact List App that was built using the MEAN stack:

* MongoDB
* Express
* AngularJS
* NodeJS

## Configuration ##

- **Install Git** on you computer from https://git-scm.com/download/win
 
- **Install node.js** from https://nodejs.org/en/download/
 
- Steps to **Clone Repo**: Open **Git Bash** in **C:/** and type  
```
#!Git
         git clone https://manoj199@bitbucket.org/manoj199/contactlistapp.git
```
 
- Next open Git Bash in **C:/contactlistApp** or change directory to contactlistApp
 
- Type this command in **Git Bash** to install Express.js - 
```
#!Git

         npm install express
```
- Next type this command in **Git Bash** to install mongojs - 
```
#!Git

         npm install mongojs
```

## Database configuration ##

- **Download MongoDB** from https://www.mongodb.com/download-center?jmp=nav#community

- **Install** using **Custom** setting and change install location as **C:/mongo**

- Next create **empty folders** at** C:/data/db**
 






## How to run tests ##

- Open **Git Bash** at location **C:/contactlistApp** or **cd to contactlistApp**

- Type this command to start node server at Git Bash
```
#!Git

         node server
```

- Open another **Git Bash** prompt at **C:/mongo/bin** and type
```
#!Git

         ./mongod
```
  
to start MongoDB

- Open another **Git Bash** prompt at **C:/mongo/bin** and type
```
#!Git

         ./mongo
         

```
```
#!Git

       use contactlist
         

```

- Open **Chrome Browser** and at URL type **localhost:3000** to launch localhost