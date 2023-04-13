import {Header} from 'components/Header/Header'

export const Layout = ({ children }) => {
    return (
      <>
        <Header/>
        <main>{children}</main>
        <footer></footer>
      </>
    );
}