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
## Solution overview
I’ve decided to work with the technologies that are used in Thmanyah.
-	For backend: NestJs, Fastify and Typeorm.
-	For database: PostgreSQL.
-	For frontend: NextJs and Tailwind css.
-	For deployment: Render.com.
-	For version control: Git and GitHub.

I’ve started with asking some questions and the solving process was the answers,
-	What are the task requirements?
-	How similar frontend apps looks like?
-	What are the data provided by iTunes search API?
-	What is my plan for the UI?
-	What data I’ll need from the iTunes API?
-	How the integration with iTunes could done?
-	What is the main flow for user searching request?
-	How can I deliver my solution parts (RestAPI, Frontend and the database)?
## Solution Design
I preferred to consider the main data that returned from the iTunes API and build a basic UI to display the data – it’s improved after – and functionality.
Data: 
- wrapperType
- artistName
- artistViewURL
- *viewURL
- *Name
- artworkUrl100}.
 
## Solution Implementation
### Database:
I preferred to use Typeorm and instead of configuring the Sync property which sync any changes done to the entities to the database, I used migrations because it allows rollback any change at any point.
Sample schema to store the results:

```code
table term{
  id int [primary key]
  text varchar 
}

table media{
  id int [primary key]
  type varchar
  name varchar
  viewUrl varchar
  artworkUrl100 varchar
  artist varchar
  artistViewUrl varchar [null]
  termId int
}

ref: media.termId > term.id
```

### Rest API:
Started with NestJs Typescript starter code and built the database schema, then build the iTunes integration module and receive the iTunes results into a dto through searchByTerm method.
- Setup the media module to accept the client request through api/media?term= and the search term as a query string in the controller then proceed the request to the service which checks if the term is used before to fetch the results from the database or call the iTunes integration service to get the results from iTunes search API. 
- Handled the empty search term to return a random record from media entity.
- Remove the src/ references because of production environment.

## Deployment

The Restful API deployed using [Render.com](https://Render.com) and you can see the Swagger doc [here](https://itunesintergration-restapi.onrender.com/api/swagger).