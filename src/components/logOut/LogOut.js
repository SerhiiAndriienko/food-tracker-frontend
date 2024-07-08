import { ButtonImg, Container, ModalBackdrop } from './LogOut.styled';

import settingImg from '../../public/img/setting.svg';
import logOutImg from '../../public/img/logout.svg';

export default function LogOutModal() {
  return (
    <>
      <Container>
        <ButtonImg>
          <img src={settingImg} height={'16px'} alt="Setting img" />
          <button>Setting</button>
        </ButtonImg>

        <ButtonImg>
          <img src={logOutImg} height={'16px'} alt="Setting img" />
          <button>Log out</button>
        </ButtonImg>
      </Container>
      <ModalBackdrop></ModalBackdrop>
    </>
  );
}
