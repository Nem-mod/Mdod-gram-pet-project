import { body } from "express-validator";

const postValidator = [
    body('title', 'Enter correct title').isLength({ min: 1 }).isString(),
    body('text' ,'Enter the text of the post').isLength({ min: 1 }).isString(),
    body('tags', 'Incorrect tags format').optional().isString(),
    body('imgURL').optional().isURL(),
];
export default postValidator;