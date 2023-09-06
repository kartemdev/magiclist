import { INavigationItem } from "~shared/components";

export const navGroups = (isAuth: boolean, isMobile: boolean) => {
  if (isAuth) {
    const groups: INavigationItem[] = [
      {
        to: '/table',
        content: 'Table'
      }
    ];

    groups[isMobile ? 'unshift' : 'push'](
      {
        to: '/auth/logout',
        name: 'logout',
        content: 'Выход'
      }
    );

    return groups;
  } else {
    const groups: INavigationItem[] = [];

    groups[isMobile ? 'unshift' : 'push'](
      ...[
        {
          to: '/auth/login',
          name: 'login',
          content: 'Войти'
        },
        {
          to: '/auth/register',
          name: 'register',
          content: 'Регистрация'
        },
      ]
    );

    return groups;
  }
};
