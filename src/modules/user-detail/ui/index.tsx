import React from 'react';
import { getTodoByUser } from 'models/todo';
import { getUserById } from 'models/user';
import { useParams } from 'react-router-dom';

import './styles.scss';

const UserDetail = () => {

  const { userId } = useParams();
  
  const { data: userData } = getUserById(+userId);
  const { data: todoData } = getTodoByUser(+userId);
  
  console.log(userData)

  return (
    <div className='user-detail'>
      {todoData?.map((el: any) => (
        <div className='user-detail__todo' key={el.id}>{el.title}</div>
      ))}
    </div>
  )
}

export default UserDetail;
