import React from 'react';
import { renderHook } from '@testing-library/react';
import { useWindowDimensions } from './';

describe('useWindowDimensions', () => {
  it('render', () => {
    React.useState = jest.fn().mockReturnValueOnce([
      {
        width: 1050,
        height: 700,
      },
      jest.fn(),
    ]);
    const { result } = renderHook(() => useWindowDimensions());
    const { height, width } = result.current;

    expect(width).toEqual(1050);
    expect(height).toEqual(700);
  });
});
