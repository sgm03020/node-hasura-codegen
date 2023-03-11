import express from 'express'
import { decrypted, getPosition } from './hasura'
const router = express.Router()


router.use(express.urlencoded({ extended: true }))

router.get('/entries', async (req, res) => {
  const rawParams = req.body?.params
  if (!rawParams)
    return res.send({})
  const params = decrypted(rawParams)

  return res.send({})
})

router.get('/', async (req, res) => {
  return res.send("OK")
})

export default router