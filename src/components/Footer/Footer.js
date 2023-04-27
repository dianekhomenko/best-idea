import { Container } from 'components/Footer/Footer.styled.js';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

export const Footer = (props) => {
    return (
      <Container>
        <AiOutlineCopyrightCircle /> All rights reserved 2023
        <div id="captcha"></div>
      </Container>
    );
}