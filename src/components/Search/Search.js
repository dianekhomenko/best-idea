import {
  SearchBar,
  SearchInput,
  SearchIcon,
  SearchButton,
  ClearButton,
  SideBar,
  Banner,
  SearchBlock,
} from 'components/Search/Search.styled';
import { MdOutlineClear } from 'react-icons/md';
import banner from 'upload/banner.png';

export const Search = ({ onSubmit, filter, clearSearch }) => {
  return (
    <SideBar>
      <SearchBlock>
        <SearchBar onSubmit={onSubmit}>
          <SearchInput
            placeholder="Search ideas"
            name="searchbar"
            type="text"
          />
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
        </SearchBar>
        {(filter.length) ? (
          <ClearButton onClick={clearSearch}>
            <MdOutlineClear /> Clear search
          </ClearButton>
        ) : 'Nothing found'}
      </SearchBlock>
      <Banner src={banner} alt="Fing new ideas" />
    </SideBar>
  );
};
