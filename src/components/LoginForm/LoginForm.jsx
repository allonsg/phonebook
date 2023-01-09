import { login } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Label } from "./LoginForm.styled"
import PropTypes from 'prop-types';


export const LoginForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
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
        setEmail('');
        setPassword('');
    };
  return (
    <Form onSubmit={handleSubmit}>
                <Label>Email
                    <input type="email" name='email' value={email} onChange={handleChange}/>
                </Label>
                <Label>Password
                    <input type="text" name='password' value={password} onChange={handleChange}/>
                </Label>
                <Button type="submit" disabled={isLoading}>LogIn</Button>
            </Form>
  )
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};