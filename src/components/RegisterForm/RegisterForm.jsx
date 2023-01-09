import { signUp } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Button} from "./RegisterForm.styled"
import PropTypes from 'prop-types';

export const RegisterForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
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

        dispatch(signUp(formData));

        setName('');
        setEmail('');
        setPassword('');
    };

  return (
            <Form onSubmit={handleSubmit}>
                <Label> Name <input type='text' name='name' value={name} onChange={handleChange} /></Label>
                <Label> Email <input type='email' name='email' value={email} onChange={handleChange} /></Label>
                <Label> Password <input type='text' name='password' value={password} onChange={handleChange} /></Label>
                <Button type="submit" disabled={isLoading}>Register</Button>
            </Form>
  )
}

RegisterForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};