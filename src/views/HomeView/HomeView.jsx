import { getUser } from "redux/userSlice";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { LoggedInText, LoggedInTitle, MainHomeBlock, RedirectLink } from "./HomeView.styled";

const HomeView = () => {
    const user = useSelector(getUser);

  return (<>
    <Helmet>
      <title>My Pnonebook</title>
    </Helmet>
    <MainHomeBlock>

      {!!user ?
        <>
          <LoggedInTitle>Welcome to HomePage</LoggedInTitle>
          <LoggedInText>You are already in an account, I recommend you create your <RedirectLink to='/contacts'>contacts</RedirectLink>!</LoggedInText>
        </>
        :
        <>
          <LoggedInTitle>Welcome to Phonebook</LoggedInTitle>
          <LoggedInText>You can <RedirectLink to='/register'>register</RedirectLink> or <RedirectLink to='/login'>log in</RedirectLink> to your account and use your Phonebook.</LoggedInText>
        </>}
    </MainHomeBlock>
  </>)
};

export default HomeView;
