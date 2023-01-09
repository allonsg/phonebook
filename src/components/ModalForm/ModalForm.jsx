import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "redux/contactsSlice";
import { Button, Form, Label } from "./ModalForm.styled"
import PropTypes from 'prop-types';

export const ModalForm = ({prevContact, handleModal}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
   setName(prevContact.name);
   setNumber(prevContact.number);
  }, [])
  

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
      
    const formData = {
      name,
      number,
    }

    const finalData = {
      formData,
      id: prevContact.id,
    }

    dispatch(editContact(finalData));

    setName('');
    setNumber('');
    handleModal();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>Name:
        <input type="name" name='name' value={name} onChange={handleChange} />
      </Label>
      <Label>Number:
        <input type="text" name='number' value={number} onChange={handleChange} />
      </Label>
      <Button type="submit">Edit</Button>
    </Form>
  );
};

ModalForm.propTypes = {
    prevContact: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired,
};