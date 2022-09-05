import { render } from '@testing-library/react';
import Description from './description';

describe('Description', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Description synopsis="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil blanditiis adipisci ut repellendus itaque debitis libero cumque in quibusdam possimus incidunt quisquam iusto optio impedit ratione laudantium quas corrupti voluptate officiis sit. Esse rerum illum ipsam officiis, dolorum enim quis eius similique mollitia culpa assumenda. Ab aut quasi repellendus" />
    );
    expect(baseElement).toBeTruthy();
  });
});
