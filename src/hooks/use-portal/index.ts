import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

interface Portal {
  render: ({ children }: { children: React.ReactNode }) => React.ReactPortal;
  remove: () => boolean
}

const usePortal = (parentElement?: HTMLElement) => {
  const [portal, setPortal] = useState<Portal>({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback((parentElement: HTMLElement) => {
    const Portal = ({ children }: { children: React.ReactNode }) =>
      ReactDOM.createPortal(children, parentElement);

    const remove = () => ReactDOM.unmountComponentAtNode(parentElement);

    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (parentElement) {
      portal.remove();
    }
    
    const newPortal = createPortal(parentElement);

    setPortal(newPortal);

    return () => {
      newPortal.remove();
    };
  }, [parentElement]);

  return portal.render;
};

export default usePortal;
