import express from 'express';
import { config } from 'dotenv'
import mongoose from 'mongoose'
import usersRouter from './routes/users.mjs'
import exercisesRouter from './routes/exercises.mjs'
import cors from 'cors'

config()
const app = express();
app.use(cors())
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

app.use('/users', usersRouter)
app.use('/exercises', exercisesRouter)

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://0.0.0.0:${port}`);
});