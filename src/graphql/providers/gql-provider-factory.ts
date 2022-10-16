import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { typeDefs } from '../type-defs';

export const gqlProviderFactory = async () => {
  const { NEO4J_URI, NEO4J_USERNAME, NEO4J_PASSWORD } = process.env;

  const driver = neo4j.driver(
    NEO4J_URI,
    neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
  );

  // Define GraphQL schema and provide db driver
  const neoSchema = new Neo4jGraphQL({
    typeDefs: typeDefs,
    driver: driver,
  });

  const schema = await neoSchema.getSchema();
  await neoSchema.assertIndexesAndConstraints({
    options: { create: true },
  });
  return {
    playground: true,
    schema,
  };
};
