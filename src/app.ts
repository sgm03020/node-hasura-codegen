import express, { Request, Response, NextFunction } from "express";
import api from './api'


// CORS
const cors = (req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
}

// ignore request for FavIcon. so there is no error in browser
const ignoreFavicon = (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end()
  }
  next()
}

const port = process.env.PORT || 3000;
const app = express()

app.use(cors)
app.use(ignoreFavicon)
app.use(express.json())
app.use('/api', api)


app.listen(port, () => {
  console.log(`Auth server running on port ${port}.`);
})