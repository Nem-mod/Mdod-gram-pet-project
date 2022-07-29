import { body } from "express-validator";

const registerValidator = [
    body('email', 'Incorrect email').isEmail(),
    body('password' ,'Incorrect password').isLength({ min: 5 }),
    body('userName', 'Incorrect user-name length').isLength({ min: 3 }),
    body('avatarURL').optional().isURL(),
    body('userBio').optional().isLength({min: 10, max: 100}),
];
export default registerValidator;