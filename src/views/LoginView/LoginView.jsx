import { LoginForm } from "components/LoginForm/LoginForm";
import {getIsLoading} from "redux/userSlice";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { useSelector } from "react-redux";
import { LoginBlock, Wrap } from "./LoginView.styled";
import { Helmet } from "react-helmet-async";


const LoginView = () => {
    const isLoading = useSelector(getIsLoading);
    return (
        <>
        <Helmet>
        <title>Authorization</title>
            </Helmet>
            <LoginBlock>
            <LoginForm isLoading={isLoading}/>
            </LoginBlock>
        </>
    );
}

export default WithNoAuthRedirect(LoginView, '/contacts');
