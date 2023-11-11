import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { GithubIcon, ListIcon, TelegramIcon } from '~shared/assets';
import { LangsSelector } from '~components/langs-selector';

import './styles.scss';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className='footer'>
      <div className="footer__block footer__block-first">
        <div className='footer__block-first_logo'>
          <ListIcon className='footer__block-first_icon' />
          {window.translate('powered_kartemdev')}
        </div>
        {isMobile || <LangsSelector isTopPlacementMenu />}
      </div>
      <div className="footer__block footer__block-second">
        <div className="footer__block-second_social">
          <a
            className='footer__block-second_link'
            href="https://github.com/kartemdev"
            target='_blank'
          >
            <GithubIcon className='footer__block-second_icon'/>
          </a>
          <a
            className='footer__block-second_link'
            href="https://t.me/kartemdev"
            target='_blank'
          >
            <TelegramIcon className='footer__block-second_icon' />
          </a>
        </div>
        <span className='footer__block-second_copyright'>
          <span>&#xa9; {`${window.translate('copyright_ml')}.`}</span>
          <span>{`${window.translate('web_tables_ml')}.`}</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
