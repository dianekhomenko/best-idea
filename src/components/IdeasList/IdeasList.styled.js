import styled from 'styled-components';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-right: 25px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    width: -webkit-fill-available;
  }
`;
