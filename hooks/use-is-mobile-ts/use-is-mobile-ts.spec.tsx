import React from 'react';
import { renderHook } from '@testing-library/react';
import { useIsMobileTs } from './use-is-mobile-ts';

React.useEffect = jest.fn();

describe('useIsMobileTs', () => {
  it('render desktop', () => {
    React.useState = jest.fn().mockReturnValueOnce([
      {
        width: 1000,
        height: 700,
      },
      jest.fn(),
    ]);

    const { result } = renderHook(() => useIsMobileTs());

    expect(result.current).toBeFalsy();
  });

  it('render mobile', () => {
    React.useState = jest.fn().mockReturnValueOnce([
      {
        width: 500,
        height: 700,
      },
      jest.fn(),
    ]);

    const { result } = renderHook(() => useIsMobileTs());

    expect(result.current).toBeTruthy();
  });
});
