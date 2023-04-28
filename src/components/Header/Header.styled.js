import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0.0625rem 0 #dfe4eb;
  border-botton: 1px solid black;
  background-color: #fff;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Button = styled.button`
  align-items: center;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  height: 48px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  transition: box-shadow 0.15s, transform 0.15s;
  font-size: 18px;
  gap: 5px;
  svg {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
    svg {
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;

  svg {
    height: 20px;
    width: 20px;
  }

`;