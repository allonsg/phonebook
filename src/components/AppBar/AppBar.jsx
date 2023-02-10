import { userLogOut } from "redux/contactsSlice";
import { getUser, logOut } from "redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddContactIcon, Header, HeaderButton, HeaderLink, HomeButton, LoginIcon, MoonThemButton, SunThemButton, WelcomeUser, Wrapper } from "./AppBar.styled"
import { changeTheme, getTheme } from "redux/themeSlice";


export const AppBar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const themeToggle = useSelector(getTheme);

  const onLogOut = () => {
    dispatch(userLogOut());
    dispatch(logOut());
  }

  const themeChange = () => {
    dispatch(changeTheme());
  }

  return (
    <Header>
      <Wrapper>
        {user?<> <HomeButton to='/home'>My Phonebook</HomeButton>
        <HeaderLink to='/contacts'>Contacts</HeaderLink><HeaderButton>Add Contact <AddContactIcon/></HeaderButton></> : <HomeButton to='/'>My Phonebook</HomeButton>}
      </Wrapper>
      <Wrapper>
        {user?<><WelcomeUser>Hi {user.name}! </WelcomeUser><HeaderButton onClick={onLogOut}>Sign Out <LoginIcon/></HeaderButton></>:<><HeaderLink to='/register'>Register</HeaderLink>
          <HeaderLink to='/login'>LogIn</HeaderLink></>}
        {themeToggle? <SunThemButton onClick={themeChange}/> : <MoonThemButton onClick={themeChange}/>}
      </Wrapper>
    </Header>
  )
};