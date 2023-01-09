import { LoginForm } from "components/LoginForm/LoginForm";
import {getIsLoading} from "redux/userSlice";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { useSelector } from "react-redux";
import { Wrap } from "./LoginView.styled";


const LoginView = () => {
    const isLoading = useSelector(getIsLoading);
    return (
        <Wrap>
            <h1>Login Page</h1>
            <LoginForm isLoading={isLoading}/>
        </Wrap>
    );
}

export default WithNoAuthRedirect(LoginView, '/phonebook/contacts');
