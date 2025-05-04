import book from '../Models/Books.model.js';

 export const getBooks = async (req,res) => {
    try {
        const books = await book.find();
        res.status(200).json(books)       
    } catch (error) {
        console.log(error)
        res.status(500).json(error)       
    }
}

export const NewBook=async (req,res) => {
    try {
        const {title,author,description,image } = req.body;
        const newBook = await book.findOne({title})
        if(newBook) {
            return res.status(400).json({message: "Book already exist"})
        }
        else{
            const books = new book({
                title,author,description,image
            })
            await books.save()
            res.status(201).json({message:"Book Added"})
        }
    } catch (error) {
        console.log(error)
    }
}
