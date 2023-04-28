import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
  ClearButton,
  SideBar,
} from 'components/Search/Search.styled';
import {MdOutlineClear} from 'react-icons/md'

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
    </SideBar>
  );
};
