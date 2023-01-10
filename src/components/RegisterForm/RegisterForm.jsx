import { signUp } from "redux/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Button, Input, StyledAlert, Message, Letter, Capital, Number, Length } from "./RegisterForm.styled";
import PropTypes from 'prop-types';

export const RegisterForm = ({ isLoading }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
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
            case 'name':
                return setName(value);
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
            name,
            email,
            password,
        }

        dispatch(signUp(formData));

        setName('');
        setEmail('');
        setPassword('');
    };

    const pass = password.length < 8;

    return (
        <>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Label> Name <Input type='text' name='name' value={name} onChange={handleChange} placeholder='Adam' required={true}/></Label>
                <Label> Email <Input type='email' name='email' value={email} onChange={handleChange} placeholder='example@gmail.com' required={true}/></Label>
                <Label passwordInvalid={passwordInvalid}> Password <Input type='password' title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name='password' value={password} onFocus={onPassFocus} onBlur={()=> setPasswordInvalid(false)} onChange={handleChange} min={8} max={21} placeholder='Enter min 8 symbols' required={true}/></Label>
                <Button type="submit" disabled={isLoading || !name || !email || pass}>Register</Button>
            </Form>
        </>
    )
}

RegisterForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};