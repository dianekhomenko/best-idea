import styled from 'styled-components';
import { Field as FormikField } from 'formik';
import { Form as Formik } from 'formik';

export const Field = styled(FormikField)`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
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