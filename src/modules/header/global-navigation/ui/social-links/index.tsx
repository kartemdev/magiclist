import React from 'react'
import { GithubIcon, TelegramIcon } from '~shared/assets';

import './styles.scss';

const SocialLinks: React.FC = () => {
  return (
    <div className='social-links'>
      <a
        className='social-links__item social-links__github'
        href="https://github.com/kartemdev"
        target='_blank'
      >
        <GithubIcon className='social-links__github-icon'/>
      </a>
      <a
        className='social-links__item social-links__telegram'
        href="https://t.me/kartemdev"
        target='_blank'
      >
        <TelegramIcon className='social-links__telegram-icon' />
      </a>
    </div>
  )
}

export default SocialLinks;
