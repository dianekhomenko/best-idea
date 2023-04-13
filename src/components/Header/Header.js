import { Container } from 'components/Header/Header.styled.js'
import { Button } from 'components/Header/Header.styled.js';

export const Header = props => {
  return (
    <Container>
      <a href="/">
        <img src="events/logo.png" alt="best trip" height="80" width="80" />
      </a>
      <Button>Add new event</Button>
    </Container>
  );
};
