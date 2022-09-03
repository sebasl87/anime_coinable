import styled from '@emotion/styled';
import { theme } from '@theme';

export const TableCards = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  ${theme.breakpoints.md} {
    grid-gap: 4rem;
  }
`;