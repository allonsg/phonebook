import { login } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatedBorder, Button, Form, FormHeader, Input, Label, LoginBox, LoginIcon, UserBox } from "common/formStyles/formStyles"
import PropTypes from 'prop-types';



export const LoginForm = ({ isLoading }) => {
    const dispatch = useDispatch();
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
            default:
                return;
        };
    };


    const handleSubmit = e => {
        e.preventDefault();
             const formData = {
            email,
            password,
        }
        dispatch(login(formData));
    };

    const validation = isLoading || !emailIsValid || !passwordIsValid;

    return (<LoginBox>
        <FormHeader>
            <LoginIcon/>
            Log In
        </FormHeader>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <UserBox>
                    <Input type="email" name='email' value={email} onChange={handleChange} required={true}/>
                <Label text={!!email}>Email</Label>
            </UserBox>
            <UserBox>
                    <Input type="password" name='password' value={password} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} min={8} max={21} required={true}/>
                <Label text={!!password}>Password</Label>
            </UserBox>
                <Button type="submit" disabled={validation}>LogIn<AnimatedBorder disabled ={validation}></AnimatedBorder></Button>
            </Form>
  </LoginBox>
  )
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};