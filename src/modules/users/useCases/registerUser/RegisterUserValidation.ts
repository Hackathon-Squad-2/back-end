import { celebrate, Joi, Segments } from 'celebrate';

export const registerUserValidation = celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  },
});
