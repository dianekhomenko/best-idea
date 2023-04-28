import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Container } from 'components/Layout/Layout.styled';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer></Footer>
    </>
  );
};
