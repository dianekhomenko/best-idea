import { Container } from 'components/Header/Header.styled.js'
import { Button } from 'components/Header/Header.styled.js';
import {IoMdAddCircleOutline} from 'react-icons/io'

export const Header = props => {
  return (
    <Container>
      <a href="/">
        <img src="events/logo.png" alt="best trip" height="80" width="80" />
      </a>
      <Button>
        <IoMdAddCircleOutline />
        Add new event
      </Button>
    </Container>
  );
};
