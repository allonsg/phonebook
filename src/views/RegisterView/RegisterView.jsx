import { useSelector } from "react-redux";
import {getIsLoading } from "redux/userSlice";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { Title, Wrap } from "./RegisterView.styled";

const RegisterView = () => {
    const isLoading = useSelector(getIsLoading);

    return (
        <Wrap>
            <Title>Register Page</Title>
            <RegisterForm isLoading={isLoading} />
        </Wrap>
    );
}


export default WithNoAuthRedirect(RegisterView, '/phonebook/contacts');