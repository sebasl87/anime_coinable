import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout', () => {
  jest.mock('next/router', () => ({
    useRouter() {
      return {
        route: '/',
        pathname: '/',
        asPath: '/',
        push: jest.fn(),
        replace: jest.fn(),
      };
    },
  }));
  it('should render successfully', () => {
    const { baseElement } = render(<Layout />);
    expect(baseElement).toBeTruthy();
  });
});
