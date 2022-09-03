import { IntegrationsTableProps } from '@interfaces';
import styled from '@emotion/styled';


export const RowCards = styled.div<IntegrationsTableProps>`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: ${props =>
    props.integrationsAlign ? 'center' : 'space-between'};
  margin-bottom: ${props => props.integrationsAlign && '16px'};
`;