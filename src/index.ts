import * as dotenv from 'dotenv'
dotenv.config()
import { getSdk, GetUserQuery } from './admin/admin'
import { GraphQLClient } from 'graphql-request'
import { Sdk, RegisterUserMutation } from './admin/admin'

const gqpClient = new GraphQLClient(
  process.env.HASURA_GRAPHQL_ENDPOINT as string,
  {
    headers: {
      [`x-hasura-admin-secret`]: 'mysecret',
    }
  }
);


(async () => {
  const sdk = await getSdk(gqpClient)
  try {
    // { insert_user_one } を探した(RegisterUserMutation)
    // 1) OK
    // const { insert_user_one } = await sdk.registerUser({
    // 2) OK ただし、importが必要
    // const res: RegisterUserMutation = await sdk.registerUser({
    //
    const { insert_user_one } = await sdk.registerUser({
      user: {
        email: "test@test.com",
        password: "123456789"
      }
    })
  } catch (err) {
    console.log('err: ', err)
  }
  const { user } = await sdk.user()
  console.log('user: ', user)
  const queryResult = await sdk.getUser({
    where: {
      id: { _eq: "b5335e44-c5cd-4958-8bdd-e6d6e6a36bd1" }
    }
  })
  console.log('queryResult: ', queryResult)
})()





