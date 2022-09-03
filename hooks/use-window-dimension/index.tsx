import { useState, useEffect } from 'react';
import { IUseWindowDimension } from '@core-webapp/interfaces';

export const useWindowDimensions = (): IUseWindowDimension => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect((): (() => void) => {
    const handleResize = (): void =>
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    handleResize();

    window.addEventListener('resize', handleResize);

    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
};
