import { body } from "express-validator";

export const registerValidation = [
    body('email', "Некоректный email").isEmail(),
    body('password', "Некоректный password").isLength({ min:5 }),
    body('fullName', "Имя должно быть не менее 3 символов в длину").isLength({ min:3 }),
    body('avatarUrl', "Некоректный url аватарки").optional().isURL(),
]