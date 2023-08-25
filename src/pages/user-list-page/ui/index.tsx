import React from 'react';
import { Users } from 'modules/users';

import './styles.scss';

const UserListPage = () => {
  return (
    <div className='user-list-page'>
      <Users />
    </div>
  )
}

export default UserListPage;