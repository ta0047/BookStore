import express from 'express'
import { GetContact,NewContact } from '../Controllers/UserContact.controller.js'

const Router=express.Router()
Router.get('/getContact',GetContact);
Router.post('/newContact',NewContact)
export default Router



