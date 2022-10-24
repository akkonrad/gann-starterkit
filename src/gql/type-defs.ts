// type-defs.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Person {
    name: String!
    born: Int!
    actedInMovies: [Movie!]!
      @relationship(type: "ACTED_IN", properties: "ActedIn", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }

  type Movie {
    title: String!
    released: Int!
    actors: [Person!]!
      @relationship(type: "ACTED_IN", properties: "ActedIn", direction: IN)
    director: Person! @relationship(type: "DIRECTED", direction: IN)
  }

  interface ActedIn @relationshipProperties {
    roles: [String!]
  }

  extend type Person
    @auth(
      rules: [
        { operations: [READ], allowUnauthenticated: true }
        { operations: [CREATE, DELETE, UPDATE], isAuthenticated: true }
      ]
    )
`;
