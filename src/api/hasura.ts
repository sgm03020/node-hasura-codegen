import { getSdk, Sdk, UserIdInTeamMemberQueryVariables } from '../admin/admin'
import { client } from './gql-client'

const sdk: Sdk = getSdk(client)

/**
 * @param  {UserIdInTeamMemberQueryVariables} params
 */
const getPositionRaw: any = async (team_id: string) => {
  try {
    const { positions_snapshot } = await sdk.PositionsSnapshot({ team_id })
    // console.log('positions_snapshot: ', positions_snapshot)
    return positions_snapshot
  }
  catch (err) {
    console.log('err: ', err)
  }
  return
}

/**
 * @param  {UserIdInTeamMemberQueryVariables} params
 */
const getPosition: any = async (params: UserIdInTeamMemberQueryVariables) => {
  const { team_id, user_id } = params
  const boolMember = isTeamMember(params)
  if (boolMember) {
    const result = await getPositionRaw(team_id)
    return result
  }
  return
}

const isTeamMember: any = async (params: UserIdInTeamMemberQueryVariables) => {
  try {
    const { team_id, user_id } = params
    const { team_member_by_pk } = await sdk.UserIdInTeamMember({ team_id, user_id })
    const findId = team_member_by_pk?.user_id
    if (findId && findId != '')
      return true
  }
  catch (err) {
    console.log('err: ', err)
  }
  return false
}


/**
 * hex to string
 * @param {*} str1
 * @returns
 */
const hex_to_ascii = (str1: any) => {
  let hex = str1.toString()
  let str = ''
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16))
  }
  return str
}

const decrypted = (src: string) => {
  let result = ''
  for (let i = 0; i < src.length; i++) {
    const tmp = src.charCodeAt(i) - (i % 3) //iの値によって0または1または2文字ずらす
    result += String.fromCharCode(tmp)
  }
  return result
}

const decryptedParam = (params: any) => {
  if (params) {
    let body
    body = params['biroaghg']
    if (body.length > 15) {
      let bodyDecrypted = decrypted(body.substr(8, 50)) // 末尾に3桁追加(最大50文字)
      const team_id = bodyDecrypted.substr(3, 8)
      const user_id = bodyDecrypted.substr(0, 3) + bodyDecrypted.substr(11, 11) //最大11桁
      return { team_id, user_id }
    }
  }
  return {}
}

export { getPosition, isTeamMember, decrypted }
