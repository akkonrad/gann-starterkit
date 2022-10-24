# NestJS + GraphQL + Neo4j + AWS Cognito

Starter project for the NestJS + GraphQL + Neo4j + AWS Cognito stack. Uses `@neo4j/graphql` module to provide GraphQL
API.

## Installation

```bash
$ npm install
```

## Configuration

Some env variables are required. Use `.env.example` as reference.

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

