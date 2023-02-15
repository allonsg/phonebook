import { userLogOut } from "redux/contactsSlice";
import { getUser, logOut } from "redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddContactIcon, Header, HeaderButton, HeaderLink, HomeButton, LoginIcon, MoonThemButton, SunThemButton, WelcomeUser, Wrapper } from "./AppBar.styled"
import { changeTheme, getTheme } from "redux/themeSlice";
import { AddContactForm } from "components/AddContactForm/AddContactForm";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

export const AppBar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const themeToggle = useSelector(getTheme);
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });

  const onLogOut = () => {
    dispatch(userLogOut());
    dispatch(logOut()).unwrap()
      .then(() =>
        toast.success('You are successfully logged out',
          {
            position: toast.POSITION.TOP_RIGHT
          }
        ))
      .catch(() =>
        toast.error('Something went wrong...Try reloading the page and try again',
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        ));
  }

  const themeChange = () => {
    dispatch(changeTheme());
  }

  const handleModal = () => {
    setModalIsOpened(s => !s);
  }
  const themeIcon = themeToggle ? <SunThemButton onClick={themeChange} /> : <MoonThemButton onClick={themeChange} />

  const mobilePart = (user ? <>
    <Wrapper>
      <HeaderLink to='/contacts'>Contacts</HeaderLink>
    </Wrapper>
    <Wrapper>
      <HeaderButton onClick={handleModal}>
        <AddContactIcon />
      </HeaderButton>
    </Wrapper>
    <Wrapper>
      <HeaderButton onClick={onLogOut}><LoginIcon /></HeaderButton> {themeIcon}</Wrapper></>
    :
    <>
      <Wrapper><HeaderLink to='/register'>Register</HeaderLink></Wrapper>
      <Wrapper><HeaderLink to='/login'>LogIn</HeaderLink>{themeIcon}</Wrapper>
    </>)

  return (
    <Header>
      {isTabScreen && <><Wrapper>
        {user ? <> <HomeButton to='/home'>My Phonebook</HomeButton>
          <HeaderLink to='/contacts'>Contacts</HeaderLink>
          <HeaderButton onClick={handleModal}>Add Contact <AddContactIcon />
          </HeaderButton></>
          : <HomeButton to='/'>My Phonebook</HomeButton>}
      </Wrapper>
        <Wrapper>
          {user ? <><WelcomeUser>Hi {user.name}! </WelcomeUser><HeaderButton onClick={onLogOut}>Sign Out <LoginIcon /></HeaderButton></> : <><HeaderLink to='/register'>Register</HeaderLink>
            <HeaderLink to='/login'>LogIn</HeaderLink></>}
          {themeIcon}
        </Wrapper></>}
      {isMobScreen && mobilePart}
      {modalIsOpened && <Modal closeModal={handleModal} modalIsOpened={modalIsOpened}>
        <AddContactForm handleModal={handleModal} />
      </Modal>}
    </Header>
  )
};
