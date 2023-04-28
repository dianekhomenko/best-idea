import styled from 'styled-components';

export const Card = styled.div`
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;

  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;

  :hover {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }
`;

export const Title = styled.p`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 21px;

  color: #000000;
  margin: 0;
`;

export const Head = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Label = styled.span`
  background: #ffffff;
  border-radius: 5px;
  padding: 3px 5px;
`;
