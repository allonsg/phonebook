import { signUp } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Button, Input, LoginBox, FormHeader, UserBox, AnimatedBorder, LoginIcon} from "common/formStyles/formStyles";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

export const RegisterForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);
    

    const handleChange = ({ target: { name, value, validity } }) => {
        
        if (name === 'password') {
            if (validity.valid) {
                setPasswordIsValid(true);
            }
            else {
                setPasswordIsValid(false);
            }
        }

        if (name === 'email') {
            if (validity.valid) {
                setEmailIsValid(true);
            }
            else {
                setEmailIsValid(false);
            }
        }
        
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            case 'name':
                return setName(value);
            default:
                return;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();
            
        const formData = {
            name,
            email,
            password,
        }

        dispatch(signUp(formData)).unwrap()
            .then(() =>
                toast.success('You are successfully logged in',
                    {
                        position: toast.POSITION.TOP_RIGHT
                    }
                ))
            .catch(() =>
                toast.error('Something went wrong...Try reloading the page and enter valid email',
                    {
                        position: toast.POSITION.TOP_RIGHT,
                    }
                ));
    }

    const validation = isLoading || !emailIsValid || !passwordIsValid || !name;


    return (
        <LoginBox>
            <FormHeader>
                <LoginIcon />
                Sign Up
            </FormHeader>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <UserBox>
                    <Input type='text' name='name' value={name} onChange={handleChange}  required={true} />
                    <Label> Name </Label>
                </UserBox>
                <UserBox>
                    <Input type='email' name='email' value={email} onChange={handleChange} required={true} />
                    <Label emailText={!!email}> Email </Label>
                </UserBox>
                <UserBox>
                    <Input type='password' title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name='password' value={password} onChange={handleChange} min={8} max={21} required={true} />
                    <Label passText={!!password}> Password </Label>
                </UserBox>

                <Button type="submit" disabled={validation}>SignUp<AnimatedBorder disabled ={validation}></AnimatedBorder></Button>
            </Form>
        </LoginBox>
    )
}

RegisterForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};