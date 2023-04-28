import styled from 'styled-components';
import { BsSearchHeartFill as Icon } from 'react-icons/bs';

export const SearchBar = styled.form`
  width: 250px;
  display: grid;
`;

export const SearchInput = styled.input`
  width: 250px;
  background: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(201, 200, 200, 0.25);
  border-radius: 5px;
  border: none;
  padding: 15px 0 15px 20px;
  height: 20px;
`;

export const SearchIcon = styled(Icon)`
  width: 20px;
  height: 30px;
  fill: #5f0606;
`;

export const SearchButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  height: 20px;
  cursor: pointer;
  justify-self: end;
  margin-top: 10px;
`;