import React from 'react';
import { PageNotFoundIcon } from '~shared/assets';

import './styles.scss';

interface IProps {
  content: React.ReactNode;
}

const Page404: React.FC<IProps> = ({ content }) => {
  return (
    <div className='page404'>
      <PageNotFoundIcon className='page404__icon' />
      <div className='page404__text'>
        {content}
      </div>
    </div>
  );
};

Page404.defaultProps = {
  content: '',
};

export default Page404;
