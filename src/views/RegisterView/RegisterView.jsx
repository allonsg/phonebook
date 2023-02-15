import { useSelector } from "react-redux";
import {getIsLoading } from "redux/userSlice";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import WithNoAuthRedirect from "HOC/WithNoAuthRedurect";
import { Helmet } from "react-helmet-async";
import { FormBlock } from "common/formStyles/formStyles";

const RegisterView = () => {
    const isLoading = useSelector(getIsLoading);

    return (<>
        <Helmet>
        <title>Registration</title>
        </Helmet>
        <FormBlock>
            <RegisterForm isLoading={isLoading} />
        </FormBlock>
    </>
    );
}


export default WithNoAuthRedirect(RegisterView, '/contacts');