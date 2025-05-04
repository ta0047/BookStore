import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connect from './Connection/Connection.js'; 
import BookRoute from './Routes/Book.route.js'
import CourseRoute from './Routes/Course.route.js'
import SignUpRoute from './Routes/User.route.js'
import ContactRoute from './Routes/Contact.route.js'

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 4001;

Connect();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/book', BookRoute);
app.use('/api/course', CourseRoute);
app.use('/api/user', SignUpRoute);
app.use('/api/contact', ContactRoute); // Updated route configuration

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
