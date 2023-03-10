import * as dotenv from 'dotenv'
dotenv.config()
import { getSdk } from './admin/admin'
import { GraphQLClient } from 'graphql-request'

const gqpClient = new GraphQLClient(
  process.env.HASURA_GRAPHQL_ENDPOINT as string,
  {
    headers: {
      ["x-hasura-admin-secret"]: process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
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
    const { team_member_by_pk } = await sdk.MatchedTeamName({
      team_id: "26377549",
      user_id: "LAB12345678"
    })
    console.log('data: ', team_member_by_pk?.team)
  } catch (err) {
    console.log('err: ', err)
  }

  const { positions_snapshot } = await sdk.PositionsSnapshot({
    team_id: "26377549",
  })
  console.log('positions_snapshot: ', positions_snapshot)


  // const { user } = await sdk.user()
  // const queryResult = await sdk.getUser({
  //   where: {
  //     id: { _eq: "b5335e44-c5cd-4958-8bdd-e6d6e6a36bd1" }
  //   }
  // })

})()





