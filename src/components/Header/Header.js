import { Container } from 'components/Header/Header.styled.js'
import { Button } from 'components/Header/Header.styled.js';
import {IoMdAddCircleOutline} from 'react-icons/io'

export const Header = props => {
  return (
    <Container>
      <a href="/">
        <img src="events/logo.png" alt="best idea" height="80" width="210" />
      </a>
      <Button>
        <IoMdAddCircleOutline />
        Add new idea
      </Button>
    </Container>
  );
};
