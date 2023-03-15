// dotenv必須
import * as dotenv from 'dotenv'
dotenv.config()
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(
  process.env.HASURA_GRAPHQL_ENDPOINT as string,
  {
    headers: {
      ["x-hasura-admin-secret"]: process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
    }
  }
)
/*
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': hasura_admin_secret,
    'x-hasura-role': hasura_super_user,
    'x-hasura-user-id': hasura_user_id,
  },
*/

export { client }
