import { CalendarDateProps } from '@interfaces';
import { theme } from '@theme';
import { Text } from '@atoms';
import { format } from 'date-fns';

export const CalendarDate: React.FC<CalendarDateProps> = ({
  isMobile = true,
}) => {
  return (
    <Text
      fontType="H1-w500"
      fontColor={theme.colors.gray200}
      mr={1}
      minWidth="7rem">
      {isMobile
        ? format(new Date(), 'MMM co')
        : format(new Date(), "'Today is the 'co ' of 'MMMM")}
    </Text>
  );
};
export default CalendarDate;
