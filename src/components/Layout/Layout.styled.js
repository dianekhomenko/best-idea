import styled from 'styled-components';

export const Container = styled.main`
  padding: 20px 10px;
  display: flex;
  width: 300px;
  margin: 0 auto;
  flex-direction: column-reverse;

  @media screen and (min-width: 375) {
    width: 350px;
  }

  @media screen and (min-width: 480px) {
    width: 430px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
