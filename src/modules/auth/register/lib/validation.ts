import * as yup from 'yup';

export const validationSchema = () => {
  return yup.object({
    userName: yup.string().min(3, 'Не менее 3 символов').max(20, 'Не более 20 символов'),
    email: yup.string().email('Неправильный формат email').min(5, 'Обязательное поле'),
    password: yup.string().min(6, 'Не менее 6 символов').max(15, 'Не более 15 символов'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
  });
};
