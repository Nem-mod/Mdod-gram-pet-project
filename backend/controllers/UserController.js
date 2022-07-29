import  jwt  from 'jsonwebtoken';
import  bcrypt  from 'bcrypt';
import { validationResult } from "express-validator";
import UserModel from '../models/User.js'




export const register = async (req, res) => {
    try { 
    const erros = validationResult(req);
        if(!erros.isEmpty()) {
            return res.status(400).json(erros.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            userName: req.body.userName,
            avatarURL: req.body.avatarURL,
            userBio: req.body.userBio,
            passwordHash: hash
        });
    
        const user = await doc.save();

        const token = jwt.sign(
            {
                _id : user._id
            },
            'ceQdEX',
            {
                expiresIn: '30d'
            }
        );

        const {passwordHash, ...userData} = user._doc;
        res.json({
            ...userData,
            token
        });

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Registration error'
        });
    };
}


export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email})

        if(!user) {
            return res.status(404).json({
                message: 'Error'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if(!isValidPass) {
            return res.status(404).json({
                message: 'Incorrect login or password'
            })
        }

        const token = jwt.sign(
            {
                _id : user._id
            },
            'ceQdEX',
            {
                expiresIn: '30d'
            }
        );

        const {passwordHash, ...userData} = user._doc;
        res.json({
            ...userData,
            token
        });

    } catch (error) {
        console.log(error);
         res.status(500).json({
            message: 'Authorization error'
        });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);
       if(!user) {
        return res.status(400).json({
            message: 'User is not found'
        });
       }
       
       const {passwordHash, ...userData} = user._doc;
       res.json(userData);
    
    } catch (error) {
        return res.status(500).json({
            message: 'No permission'
        });
    }
};