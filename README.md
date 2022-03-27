# movie-api

An application to create movies based on movie title and fetch user movies

---

## Getting Started

To get a copy of this project up and running on your local machine for testing and development, you would need to have a minimum of the listed prerequisites installed on your local machine.

## Prerequisites
1. You need to have docker and docker-compose installed on your computer to run the service with docker

2. You need Node.js (v14 or higher) and npm (6.4.1 or higher) installed on your local machine to run the service without docker. Run node -v and npm -v in your terminal to confirm that you have them installed

3. GIT and Bash

### Node
- #### Node installation on Windows

Go to [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might might be dependent on it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, by running the following command.

      $ sudo apt install nodejs
      $ sudo apt install npm

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.5

    $ npm --version
    6.14.14

To update your `npm`, run the following command.

    $ npm install npm -g

---

## Project Install

    $ git clone https://github.com/femigabs/movie-api.git
    $ cd movie-api
    $ npm install

## Configure app

Create a `.env` file and add the environment variables described in the `.env.sample` file.


## JWT Secret

---

To verify tokens in movie service you need to provide env variable $JWT_SECRET. It should be a string value. You should use the same secret in the auth service to generate the JWT tokens.

## Running the project with docker

---

    Run the app from root dir with following command

    $ JWT_SECRET=secret OMDB_API_KEY=omdb_key docker-compose up -d

    By default, the app should run on port $ 6000

    To stop the movie service run

    $ docker-compose down

## Running the project with docker

---
## Running this project locally

    $ npm start
    $ npm run dev (development)

## Running tests

    $ npm run test

## Technologies

- Node JS
- Express
- PostgreSQL
- Docker
- Git
- Supertest, mocha and chai
- Jsonwebtoken
- Postman
- Github Action

## Documentation
- postman: https://documenter.getpostman.com/view/11087517/UVyn2JiG
- database schema: https://dbdiagram.io/d/6240c3d4bed618387308cbc3

## Copyright

Copyright (c) 2022 Femi Babayemi
