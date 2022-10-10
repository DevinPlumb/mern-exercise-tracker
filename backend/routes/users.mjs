import express from 'express'
import User from '../models/user.model.mjs'
import bodyParser from 'body-parser'
const router = express()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post("/add", (req, res) => {
    const username = req.body.username
    const newUser = new User({username})
    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

export default router
