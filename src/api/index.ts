import express from 'express'
import {
  decrypted,
  parseParams,
  getPosition,
  getGoldPosition,
  updatePosition,
  updateGoldAccount,
  postSlack
} from './hasura'
const router = express.Router()

router.use(express.urlencoded({ extended: true }))
router.get('/entries', async (req, res) => {
  return res.send({})
})

router.post('/entries', async (req, res) => {
  const rawParams = req.body?.params
  // console.log('rawParams: ', rawParams)
  if (!rawParams) return res.send({})
  const params = parseId(rawParams)
  // console.log('params: ', params)
  const result = await getPosition(params)
  // console.log('result: ', result)
  if (result) res.send(result)
  return res.send({})
})

router.get('/taat', async (req, res) => {
  /*
  const params = {
    user_id: "111112"
  }
  const result = await updatePosition(params)
  */
  const params = {
    user_id: '111111',
    brk: 'broker',
    demo: 1,
    tmode: 'tmode',
    leverage: 400,
    curr: 'JPY',
    mfree: 100
  }
  const result = await updateGoldAccount(params)
  console.log('result: ', result)
  return res.send({})
})

router.post('/taat', async (req, res) => {
  const params = new URLSearchParams(Object.entries(req.body))
  let value = params.get('params') || ''
  let result
  console.log('value: ', value)
  if (value === '') {
    return res.end()
  }
  // paramsはHEX化されており、
  // 空白文字や英数字以外は削除してしまう
  value = value.replace(/\0/g, '')
  value = value.replace(/[^0-9a-z]/gi, '')
  const dcryptedParams = parseParams(req, value)
  const command = dcryptedParams['COMMAND']
  console.log('dcryptedParams: ', dcryptedParams)
  console.log('command: ', command)
  let r_time
  if (dcryptedParams['START']) {
    r_time = dcryptedParams['START'].replace(/\./g, '-').replace('_', 'T')
    r_time = r_time.replace(/_/g, 'T')
    // r_time += '+02:00';
    //r_time += '+09:00';
    r_time += '+00:00'
  }
  const target = {
    user_id: dcryptedParams['USER'],
    md5: dcryptedParams['MD5'],
    body: dcryptedParams['BODY'],
    created_at: r_time
  }
  if (command === 'UPDATEPOSITION') {
    process.stdout.write('call UPDATEPOSITION\n')
    const result = await updatePosition(target)
    return res.send({})
  }
})

router.post('/taat-old', async (req, res) => {
  const params = new URLSearchParams(Object.entries(req.body)) //.toString("base64");
  let value = params.get('params') || ''
  let result
  console.log('value: ', value)
  if (value === '') {
    return res.end()
  }
  // paramsはHEX化されており、
  // 空白文字や英数字以外は削除してしまう
  value = value.replace(/\0/g, '')
  value = value.replace(/[^0-9a-z]/gi, '')
  // console.log('params:', params, ' size=', params.length);
  const dcryptedParams = parseParams(req, value)
  const command = dcryptedParams['COMMAND']

  if (command === 'UPDATEPOSITION') {
    process.stdout.write('call UPDATEPOSITION\n')
    result = await updatePosition(req, dcryptedParams)
    if (result) {
      process.stdout.write('UPDATEPOSITION get result\n')
      // ここでWebsocket始動
      // wsBroadcast('update')
      // 結果はどうであれ、空オブジェクトを返す
      if (result['stop']) {
        return res.end('stop')
      }
      return res.end()
    }
  } else if (command === 'UPDATEACCOUNT') {
    result = await updateGoldAccount(req, dcryptedParams)
  } else if (command === 'SENDTOSLACK') {
    result = await postSlack(req, dcryptedParams)
  } else if (command === 'COPYGOLD') {
    result = await getGoldPosition(req, dcryptedParams)
    console.log('getGoldPosition result=', result)
    // エラー相当判定
    if (!result) {
      console.log('result is undefined')
    } else if (
      result &&
      Object.keys(result).length === 0 &&
      Object.getPrototypeOf(result) === Object.prototype
    ) {
      console.log('result is empty object')
    }
    // 特別なエラーオブジェクト
    if (result['error']) {
      return res.send(result['error'])
    }
    //
    return res.send(result)
  }

  res.send('POST Hello')
  return
})

router.get('/', async (req, res) => {
  return res.send('OK')
})

const parseId = (rawParams: any) => {
  let user_id, team_id
  let body = rawParams['biroaghg']
  if (!body) return {}
  if (body.length > 15) {
    let bodyDecrypted = decrypted(body.substr(8, 50)) // 末尾に3桁追加(最大50文字)
    team_id = bodyDecrypted.substr(3, 8)
    user_id = bodyDecrypted.substr(0, 3) + bodyDecrypted.substr(11, 11) //最大11桁
  }
  return { team_id, user_id }
}

export default router
