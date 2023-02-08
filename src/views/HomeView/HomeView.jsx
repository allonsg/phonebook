import { getUser } from "redux/userSlice";
import WithAuthRedirect from "HOC/WithAuthRedirect";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const HomeView = () => {
    const user = useSelector(getUser);

    return (<>
        <Helmet>
        <title>MyPnonebook</title>
      </Helmet>
    { !!user ? <h1>Welcome to HomePage </h1> : <h1>Log In to get access to your contacts</h1> }
    </> )
};

export default WithAuthRedirect(HomeView, '/login');
