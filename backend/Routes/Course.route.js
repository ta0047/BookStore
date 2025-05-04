import express from 'express'
import {getCourse,NewCourse} from '../Controllers/Course.controller.js'
const Router=express.Router()
Router.get('/getCourse',getCourse)
Router.post('/newCourse',NewCourse)

export default Router