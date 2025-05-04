import {contact} from '../Models/UserContact.model.js'

export const GetContact=async (req,res) => {
    try {
        const userContact=await contact.find();
        res.status(200).json(userContact);
        console.log("Data Fetched")
    } catch (error) {
        res.status(500).json({message:error.message})
    } 
}
export const NewContact = async (req, res) => {
    try {
        const {name, email, message} = req.body;
        const user= await contact.findOne({email});
        if(user) {
            res.status(400).json({message: "Try another Email"})
        }
        else {
            const newContact=new contact({
                    name,email,message
                })
                await newContact.save();
                res.status(201).json({message: "Contact Added Successfully"})
            }
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
