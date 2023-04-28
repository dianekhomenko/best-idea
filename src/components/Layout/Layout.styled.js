import styled from 'styled-components';

export const Container = styled.main`
  padding: 40px;
  display: flex;
  width: 375px;
  margin: 0 auto;
  overflow: scroll;
  flex-direction: column-reverse;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;