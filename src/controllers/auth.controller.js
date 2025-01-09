import User from '../models/users.models.js';
import bcryptjs from 'bcryptjs';


//http://localhost:4000/api/create
export const create = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({ 
            email, 
            password: hashedPassword, 
            role 
        });

        const userSaved = await newUser.save();

        res.json({
            id: userSaved._id,
            email: userSaved.email,
            role: userSaved.role
        });


    }catch (error) {
        res.status(500).json({message: error.message});

    }

};





//http://localhost:4000/api/login
export const login = (req, res) => res.send('login');