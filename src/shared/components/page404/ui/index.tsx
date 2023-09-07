import React from 'react';
import { PageNotFoundIcon } from '~shared/assets';

import './styles.scss';

const Page404: React.FC = () => {
  return (
    <div className='page404'>
      <PageNotFoundIcon className='page404__icon' />
      <div className='page404__text'>
        {'Ой, страница не найдена'}
      </div>
    </div>
  )
}

export default Page404;
