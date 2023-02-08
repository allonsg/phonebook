import { userLogOut } from "redux/contactsSlice";
import { getUser, logOut } from "redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Header, HeaderLink, HomeButton, MoonThemButton, SignOutButton, SunThemButton, Wrapper } from "./AppBar.styled"
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
        <HeaderLink to='/contacts'>Contacts</HeaderLink></> : <HomeButton to='/'>My Phonebook</HomeButton>}
      </Wrapper>
      <Wrapper>
        {user?<><b>Hi {user.name}; </b><b>email:{user.email}</b><SignOutButton onClick={onLogOut}>Sign Out</SignOutButton></>:<><HeaderLink to='/register'>Register</HeaderLink>
          <HeaderLink to='/login'>LogIn</HeaderLink></>}
        {themeToggle? <SunThemButton onClick={themeChange}/> : <MoonThemButton onClick={themeChange}/>}
      </Wrapper>
    </Header>
  )
};
