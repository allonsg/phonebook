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
        {user?<> <HeaderLink to='//home'>Main</HeaderLink>
        <HeaderLink to='//contacts'>Contacts</HeaderLink></>: <div></div>}
      </Wrapper>
      <Wrapper>
        {user?<><b>User: {user.name}; </b><b>email:{user.email}</b><SignOutButton onClick={onLogOut}>Sign Out</SignOutButton></>:<><HeaderLink to='//register'>Register</HeaderLink>
      <HeaderLink to='//login'>LogIn</HeaderLink></>}
      </Wrapper>
    </Header>
  )
};
