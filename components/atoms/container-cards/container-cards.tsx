import styled from '@emotion/styled';
import { theme } from '@theme';

export const ContainerCards = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 100%;
  ${theme.breakpoints.md} {
    margin-bottom: 9rem;
  }
`;
