import styled from 'styled-components';
import { BsSearchHeartFill as Icon } from 'react-icons/bs';

export const SearchBar = styled.form`
  width: -webkit-fill-available;
  display: grid;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: -webkit-fill-available;
  background: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(201, 200, 200, 0.25);
  border-radius: 5px;
  border: none;
  padding: 15px 0 15px 40px;
  height: 20px;
  font-family: 'JetBrains Mono', monospace;
`;

export const SearchIcon = styled(Icon)`
  width: 25px;
  height: 25px;
  fill: #5f0606;
`;

export const SearchButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  height: 30px;
  cursor: pointer;
  margin: 13px 10px 0 10px;
  padding: 0;
`;

export const ClearButton = styled.button`
  heigth: 10px;
  width: 100%;
  background: none;
  cursor: pointer;
  border: none;
  text-align: left;
  font-family: 'JetBrains Mono', monospace;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.img`
  width: 300px;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const SearchBlock = styled.div`
margin-bottom: 10px;
`