import theme from './theme';

describe('Theme', () => {
  it('should render successfully', () => {
    const { spaces } = theme;
    expect(spaces(1)).toBe('1rem');
  });
});
