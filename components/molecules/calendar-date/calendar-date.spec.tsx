import { render } from '@testing-library/react';
import CalendarDate from './calendar-date';

describe('CalendarDate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalendarDate />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully not mobile', () => {
    const { baseElement } = render(<CalendarDate isMobile={false}/>);
    expect(baseElement).toBeTruthy();
  });
});
