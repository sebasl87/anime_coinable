import { render } from '@testing-library/react';
import { RowCards } from './row-cards';

describe('RowCards', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RowCards />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with integrationsAlign', () => {
    const { baseElement } = render(<RowCards integrationsAlign/>);
    expect(baseElement).toBeTruthy();
  });
});
