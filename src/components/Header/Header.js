import { Container, Button } from 'components/Header/Header.styled.js';
import { IoMdAddCircleOutline } from 'react-icons/io';
import img from 'logo.png';
import Popup from 'reactjs-popup';
import { IdeaForm } from 'components/Form/Form';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Header = props => {
  return (
    <Container>
      <a href="/">
        <img src={img} alt="best idea" height="80" width="210" />
      </a>
      <Popup
        trigger={
          <Button>
            <IoMdAddCircleOutline />
            Add idea
          </Button>
        }
        position="center center"
        modal={true}
      >
        {close => (
          <div>
            <button
              className="button"
              onClick={() => {
                close();
              }}
            >
              <AiFillCloseCircle />
            </button>
            <h2>Create your idea</h2>
            <IdeaForm />
          </div>
        )}
      </Popup>
    </Container>
  );
};
