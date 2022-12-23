# NestJS + GraphQL + Neo4j + AWS Cognito

Starter project for the NestJS + GraphQL + Neo4j + AWS Cognito stack. Uses `@neo4j/graphql` module to provide GraphQL
API.

## Installation

```bash
$ npm install
```

## Configuration

Some env variables are required. Use `.env.example` as reference.

Please note that you can disable authentication by setting USE_AUTH env variable to false. Just make sure you're not
using @auth directive in your graphql type definitions.

## Running the app

```bash
# copy config
$ copy .env.example .env 

# create docker container with neo4j database
$ npm run db:init

# development
$ npm run start

# watch mode - start db in the background and nestjs server
$ npm run start:dev 

# production mode
$ npm run start:prod

```

### Read full tutorial

Here is a full tutorial describing how to setup the project
https://medium.com/neo4j/creating-api-in-nestjs-with-graphql-neo4j-and-aws-cognito-cf92cf40b355

