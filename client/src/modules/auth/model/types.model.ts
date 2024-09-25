export enum LoginFormFieldEnum {
  Email = 'email',
  Password = 'password',
}

export enum RegisterFormFieldEnum {
  Email = 'email',
  UserName = 'userName',
  Password = 'password',
  ComfirmPassword = 'confirmPassword',
}

export interface ILoginFormData {
  [LoginFormFieldEnum.Email]: string;
  [LoginFormFieldEnum.Password]: string;
}

export interface IRegisterFormData {
  [RegisterFormFieldEnum.Email]: string;
  [RegisterFormFieldEnum.UserName]: string;
  [RegisterFormFieldEnum.Password]: string;
  [RegisterFormFieldEnum.ComfirmPassword]: string;
}
