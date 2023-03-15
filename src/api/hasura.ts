import * as dotenv from 'dotenv'
dotenv.config()
import CryptoJS from 'crypto-js'
// import Buffer from 'buffer'.Buffer
import {
  getSdk,
  Sdk,
  UserIdInTeamMemberQueryVariables,
  Positions_Snapshot_Min_Fields,
  UpdateGoldUsersMutationVariables,
} from '../admin/admin'
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
  } catch (err) {
    console.log('getPositionRaw err: ', err)
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

const getGoldPosition: any = async () => {
  return {}
}

const isTeamMember: any = async (params: UserIdInTeamMemberQueryVariables) => {
  try {
    const { team_id, user_id } = params
    const { team_member_by_pk } = await sdk.UserIdInTeamMember({
      team_id,
      user_id
    })
    const findId = team_member_by_pk?.user_id
    if (findId && findId != '') return true
  } catch (err) {
    console.log('isTeamMember err: ', err)
  }
  return false
}

const updatePosition: any = async (params: Positions_Snapshot_Min_Fields) => {
  let object = { ...params }
  let update_columns: any[] = ['md5', 'body', 'created_at'] // md5必須
  // md5必須
  if (!object['md5']) {
    object = { ...object, ...{ md5: '' } }
  }
  console.log('object: ', object)
  console.log('update_columns: ', update_columns)
  // 電文
  // object: {
  //   user_id: "111111",
  //   md5: "abc",
  //   body: "body",
  //   created_at: "20220420T00:00:00",
  // }, update_columns: ["md5", "body", "created_at"]
  const result = await sdk.InsertPositionsSnapshotOne({
    object,
    update_columns
  })
  console.log('result: ', result)
  return {}
}

const updateGoldAccount: any = async (
  params: UpdateGoldUsersMutationVariables
) => {
  const result = await sdk.UpdateGoldUsers({
    user_id: params.user_id,
    brk: params.brk,
    demo: params.demo,
    tmode: params.tmode,
    leverage: params.leverage,
    curr: params.curr,
    mfree: params.mfree
  })
  return {}
}

const postSlack: any = async () => {
  return {}
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

const decryptParams = (base64str: any) => {
  // CryptJS
  // https://blog.actorsfit.com/a?ID=00850-58ee1dbb-a5e5-48b3-8552-66e99dcfa943
  let encryption_key = process.env.ENCRYPTION_KEY || ''
  let key = CryptoJS.enc.Utf8.parse(encryption_key)
  // const encrypted = CryptoJS.DES.encrypt('TSU7004', key, {
  //   mode: CryptoJS.mode.ECB,
  //   padding: CryptoJS.pad.Pkcs7,
  // });
  // https://stackoverflow.com/questions/20519166/cant-decrypt-string-with-cryptojs
  let decrypted = CryptoJS.DES.decrypt(
    // { ciphertext: CryptoJS.enc.Utf8.parse(base64str) },
    // base64str.replace('\0', ''),
    base64str,
    key,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  )
  // console.log('encrypted: ', encrypted.toString());
  // console.log('decrypted: ', decrypted);
  // console.log('decrypted: ', decrypted.toString(CryptoJS.enc.Utf8));
  return decrypted.toString(CryptoJS.enc.Utf8)
}

/**
 * updateMainにて - updatePositon or updateGoldAccountへ分岐する
 * @param {*} req
 * @param {*} params
 */
const parseParams = (req: any, params: any) => {
  // 暗号化対応
  let target
  let raw // Deplicated
  if (params) {
    // paramsはhexのstring型文字列に変換されているが、これだけでbase64文字列に戻る
    const base64Params = hex_to_ascii(params)
    // const base64_str = Buffer.from(params).toString('base64');
    // console.log('params: ', params);
    // console.log('base64Params: ', base64Params);
    // <--ここからの行程は必要なし
    // let bufferObj = Buffer.from(strParams, 'base64');
    // let string = bufferObj.toString('utf8');
    // console.log('string: ', string);
    // -->ここまで
    // decryptParams('6KHgvNeLeyY='); => OK
    // decryptParams('b8eCaiFkfm6tB1AIcM6XHaWXJuOX4QUnkcPgYIBKm+HWbjsVlb/pzwTtQOkO7XvHrVTOkrSP0k8zCylpaf8AKUSd6x+I9nNGhPYXCj9vjyQ='); => OK
    let decryptedParams = decryptParams(base64Params)
    raw = decryptedParams
    if (process.env.DEBUG === '1')
      console.log('decryptedParams: ', decryptedParams)
    // console.log('target: ', target);
    // { START: '2021.12.03_23:57:59', USER: 'TSU7004', USDJPY: '1'}
    // { START: '2021.12.03_23:57:59', COMMAND:'UPDATEPOSITION', USER: 'TSU7004', USDJPY: '1'}
    // を作成する
    let objParams = {}
    decryptedParams.split('&').forEach((el) => {
      let pair = el.split('=')
      //if (pair[0] && pair[1]) {
      //  objParams = { ...objParams, [pair[0]]: pair[1] };
      //}
      // BODY=&となりpair[1]が偽になると、objParamsに入らないので
      // pair[0]だけを条件として、pair[1]||''とする
      if (pair[0]) {
        if (pair[0] === 'PAYLOAD' && pair[1] === '') {
          // PAYLOADが空の場合
          objParams = { ...objParams, [pair[0]]: 'No Position' }
        } else {
          objParams = { ...objParams, [pair[0]]: pair[1] || '' }
        }
      }
    })
    target = objParams
  } else {
    target = req.body
  }
  // オブジェクトを返す
  return target
}

export {
  updatePosition,
  getPosition,
  getGoldPosition,
  updateGoldAccount,
  isTeamMember,
  postSlack,
  decrypted,
  parseParams
}
