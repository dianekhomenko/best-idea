import styled from 'styled-components';
import { Field as FormikField } from 'formik';
import { Form as Formik } from 'formik';

export const Field = styled(FormikField)`
  -webkit-appearance: none;
  appearance: none;
  width: 98%;
  border: 0;
  font-family: inherit;
  padding: 12px;
  font-size: 16px;
  font-weight: 400;
  background: #fafafa;
  box-shadow: inset 0 -1px 0 rgba(#000, 0.3);
  color: black;
  transition: all 0.15s ease;

  :hover {
    background: rgba(#000, 0.04);
    box-shadow: inset 0 -1px 0 rgba(#000, 0.5);
  }

  :focus {
    background: rgba(#000, 0.05);
    outline: none;
    box-shadow: inset 0 -2px 0 #810b94;
  }
`;

export const Form = styled(Formik)`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  width: 98%;
  margin: 0 auto;
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

export const FileField = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  margin: auto;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  font-size: 16px;
  color: #7d7c7d;
  font-weight: 500;
`;

export const FormTitle = styled.span`
  left: 12px;
  font-size: 16px;
  color: #7d7c7d;
  font-weight: 500;
  pointer-events: none;
`;

export const ScrollComponent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const FilesGroup = styled.div`
  padding: 30px;
  background: rgba(204, 203, 204, 0.45);
  border: 2px dashed rgba(186, 163, 163, 1);
  text-align: center;
  transition: background 0.3s ease-in-out;
  display: flex;

  img {
    max-height: 100px;
    width: auto;
  }
`;