import { render } from '@testing-library/react';
import Score from './score';

describe('Score', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <Score
        score="some anime title"
        number={2}
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
