import { useSelector } from "react-redux";
import {getIsLoading } from "redux/userSlice";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { Title, Wrap } from "./RegisterView.styled";
import { Helmet } from "react-helmet-async";

const RegisterView = () => {
    const isLoading = useSelector(getIsLoading);

    return (<>
        <Helmet>
        <title>Registration</title>
      </Helmet>
        <Wrap>
            <Title>Register Page</Title>
            <RegisterForm isLoading={isLoading} />
        </Wrap>
    </>
    );
}


export default WithNoAuthRedirect(RegisterView, '/contacts');