import { render } from '@testing-library/react';
import { ContainerCards } from './container-cards';

describe('ContainerCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContainerCards />);
    expect(baseElement).toBeTruthy();
  });
});
