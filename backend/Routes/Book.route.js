import express from 'express'
import  {getBooks,NewBook}  from "../Controllers/Book.controller.js";

const Router=express.Router()
Router.get('/getBook',getBooks)
Router.post('/newBook',NewBook)

export default Router