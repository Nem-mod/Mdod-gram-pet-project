import { body } from "express-validator";

const postValidator = [
    body('text' ,'Enter the text of the post').isLength({ min: 1, max: 100}),
    body('tags', 'Incorrect tags format').optional().isArray(),
    body('imgURL').optional().isURL(),
];
export default postValidator;