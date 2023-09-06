import * as yup from 'yup';

export const validationSchema = () => {
  return yup.object({
    email: yup.string().email('Неправильный формат email').min(5, 'Обязательное поле'),
    password: yup.string().min(6, 'Не менее 5 символов').max(15, 'Не более 15 символов'),
  });
};
