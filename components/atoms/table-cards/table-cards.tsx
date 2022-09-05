import styled from '@emotion/styled';
import { theme } from '@theme';

export const TableCards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  ${theme.breakpoints.md} {
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }
  ${theme.breakpoints.ll} {
    grid-gap: 4.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default TableCards;