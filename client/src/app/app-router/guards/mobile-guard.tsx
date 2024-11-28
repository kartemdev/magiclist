import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useNavigate } from 'react-router-dom';

import { MobileUnavailFuncModal } from '~components/mobile-unavail-func-modal';

const MobileGuard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    if (!isMobile || isOpen) {
      return;
    }

    setIsOpen(true);
  }, [isMobile]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate('/'), 200);
  };

  return (
    <>
      <MobileUnavailFuncModal isOpen={isOpen} onClose={handleClose} />
      {!isMobile && <Outlet />}
    </>
  );
};

export default MobileGuard;
