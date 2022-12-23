import neo4j from 'neo4j-driver';
import { Neo4jGraphQL } from '@neo4j/graphql';
import { typeDefs } from '../type-defs';
import { Neo4jGraphQLAuthJWKSPlugin } from '@neo4j/graphql-plugin-auth';

export const gqlProviderFactory = async () => {
  const {
    COGNITO_REGION,
    COGNITO_USER_POOL_ID,
    NEO4J_URI,
    NEO4J_USERNAME,
    NEO4J_PASSWORD,
    USE_AUTH
  } = process.env;

  const driver = neo4j.driver(
    NEO4J_URI,
    neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
  );

  const plugins = USE_AUTH ? {
    auth: new Neo4jGraphQLAuthJWKSPlugin({
      jwksEndpoint: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/jwks.json`,
    }),
  } : {};

  // Define GraphQL schema and provide db driver
  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    plugins
  });

  const schema = await neoSchema.getSchema();
  await neoSchema.assertIndexesAndConstraints({
    options: {create: true},
  });
  return {
    playground: true,
    schema,
  };
};
