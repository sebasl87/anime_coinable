import { useWindowDimensions } from '../use-window-dimension';

export const useIsMobileTs = (size = 600): boolean => {
  const { width } = useWindowDimensions();
  const mobile = width <= size;

  return mobile;
};
