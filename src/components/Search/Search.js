import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
  ClearButton,
  SideBar,
  Banner,
} from 'components/Search/Search.styled';
import { MdOutlineClear } from 'react-icons/md'
import banner from 'upload/banner.png'

export const Search = ({ onSubmit, search, clearSearch }) => {
  return (
    <SideBar>
      <SearchBar onSubmit={onSubmit}>
        <SearchInput placeholder="Search ideas" name="searchbar" type="text" />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchBar>
      {search !== '' && (
        <ClearButton onClick={clearSearch}>
          <MdOutlineClear /> Clear search
        </ClearButton>
      )}
      <Banner src={banner} alt="Fing new ideas" />
    </SideBar>
  );
};
