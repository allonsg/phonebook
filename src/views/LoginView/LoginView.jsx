import { LoginForm } from "components/LoginForm/LoginForm";
import {getIsLoading} from "redux/userSlice";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { FormBlock } from "common/formStyles/formStyles";


const LoginView = () => {
    const isLoading = useSelector(getIsLoading);
    return (
        <>
        <Helmet>
        <title>Authorization</title>
            </Helmet>
            <FormBlock>
            <LoginForm isLoading={isLoading}/>
            </FormBlock>
        </>
    );
}

export default WithNoAuthRedirect(LoginView, '/contacts');
