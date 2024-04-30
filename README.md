<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


## Description

Integration project with iTunes Search API to media fetching using term string as query string.

## How to start
- clone the project and install dependencies
  ```bash
  $ git clone https://github.com/Hadymohammed/itunesIntergration-RestApi.git
  $ npm install
  ```
- setup required environment variables as described in .env.example.
- create PostgreSQL database.
- run the database migartions to build the schema
  ```bash
  $ npm run migration:run
  ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

The Restful API deployed using [Render.com](https://Render.com) and you can see the Swagger doc [here](https://itunesintergration-restapi.onrender.com/api/swagger).