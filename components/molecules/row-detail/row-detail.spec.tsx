import { render } from '@testing-library/react';
import RowDetail from './row-detail';

describe('RowDetail', () => {

  it('should render successfully', () => {
    const { baseElement } = render(
      <RowDetail
        title="some anime title"
        result="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat saepe aliquam et cum possimus, quae praesentium eius tempore vitae voluptatibus."
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
