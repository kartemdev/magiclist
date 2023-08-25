import React from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from 'models/user';
import { useAppDispatch } from 'shared/hooks';

import './styles.scss';

export const Users = () => {

  const { data, isFetching } = getAllUsers();
  const dispatch = useAppDispatch();

  return (
    <div className='user-list'>
      {isFetching || data?.map((el) => (
        <Link
          className='user' 
          key={el.id} 
          to={`/users/${el.id}`}
        >
          {el.name}
        </Link>
      ))}
    </div>
  )
}

export default Users;
