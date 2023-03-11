// import * as dotenv from 'dotenv'
// dotenv.config()
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.HASURA_GRAPHQL_ENDPOINT as string,
  {
    headers: {
      ["x-hasura-admin-secret"]: process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
    }
  }
)

export { client }
