import Courses from '../Models/Courses.model.js';

export const getCourse = async (req, res) => {
    try {
        const course = await Courses.find();
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const NewCourse = async (req, res) => {
    try {
        const { name, cost, provider, description, image } = req.body;
        const newCourse = await Courses.findOne({ name });
        if (newCourse) {
            return res.status(400).json({ message: "Course already exists" });
        } else {
            const course = new Courses({
                name, cost, provider, description, image
            });
            await course.save();
            res.status(201).json({ message: "Course added" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
