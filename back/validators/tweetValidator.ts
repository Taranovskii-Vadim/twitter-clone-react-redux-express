import { body } from "express-validator";

export const tweetValidator = [
  body("text", "Введите текст твита")
    .isLength({ max: 280 })
    .isString()
    .withMessage("Длина содержимого твита не должна быть больше 280 символов")
    .trim(),
];
