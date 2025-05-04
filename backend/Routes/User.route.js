import express from 'express'
import {SignUp,Login,getUser} from '../Controllers/User.controller.js'


const Router=express.Router()
Router.get('/getUser',getUser)
Router.post('/signup',SignUp)
Router.post('/login',Login)

export default Router