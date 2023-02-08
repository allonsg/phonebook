import { login } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatedBorder, Button, Form, FormHeader, Input, Label, LoginBox, LoginIcon, UserBox } from "./LoginForm.styled"
import PropTypes from 'prop-types';


export const LoginForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);

    const handleChange = ({ target: { name, value } }) => {

         if (name === 'password') {
            if (!value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            setPasswordInvalid(true);
            }
            else {
                setPasswordInvalid(false);
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

    const onPassFocus = e => {
        if (e.target.value.length < 8 && e.target.value.length >= 1) {
            setPasswordInvalid(true);
        } else {
            setPasswordInvalid(false);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
             const formData = {
            email,
            password,
        }
        dispatch(login(formData));
        // setEmail('');
        // setPassword('');
    };

    const pass = password.length < 8;

    return (<LoginBox>
        <FormHeader>
            <LoginIcon/>
            Log In
        </FormHeader>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <UserBox>
                    <Input type="email" name='email' value={email} onChange={handleChange} required={true}/>
                <Label emailText={!!email}>Email</Label>
            </UserBox>
            <UserBox>
                    <Input type="password" name='password' value={password} title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={handleChange} onFocus={onPassFocus} onBlur={()=> setPasswordInvalid(false)} min={8} max={21} required={true}/>
                <Label passwordInvalid={passwordInvalid} passText={!!password}>Password</Label>
            </UserBox>
                <Button type="submit" disabled={isLoading || !email || pass}>LogIn<AnimatedBorder disabled ={isLoading || !email || pass}></AnimatedBorder></Button>
            </Form>
  </LoginBox>
  )
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};