// typeDefs.ts
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Person {
    name: String!
    born: Int!
    actedInMovies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    directedMovies: [Movie!]! @relationship(type: "DIRECTED", direction: OUT)
  }

  type Movie {
    title: String!
    released: Int!
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
    director: Person! @relationship(type: "DIRECTED", direction: IN)
  }

  interface ActedIn @relationshipProperties {
    roles: [String!]
  }
`;
