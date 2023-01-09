import { userLogOut } from "redux/contactsSlice";
import { getUser, logOut } from "redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Header, HeaderLink, SignOutButton, Wrapper } from "./AppBar.styled"

export const AppBar = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(userLogOut());
    dispatch(logOut());
  }
  
  return (
    <Header>
      <Wrapper>
        {user?<> <HeaderLink to='/phonebook/home'>Main</HeaderLink>
        <HeaderLink to='/phonebook/contacts'>Contacts</HeaderLink></>: <div></div>}
      </Wrapper>
      <Wrapper>
        {user?<><b>User: {user.name}; </b><b>email:{user.email}</b><SignOutButton onClick={onLogOut}>Sign Out</SignOutButton></>:<><HeaderLink to='/phonebook/register'>Register</HeaderLink>
      <HeaderLink to='/phonebook/login'>LogIn</HeaderLink></>}
      </Wrapper>
    </Header>
  )
};
