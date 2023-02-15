import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "redux/contactsSlice";
import { Form, UserBox } from "common/formStyles/formStyles";
import { ContactActionBox, ContactButton, ContactHeader, ContactInput, ContactLabel } from "common/contactFormStyles/contactFormStyles";
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const ContactActionForm = ({ prevContact, handleModal }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    setName(prevContact.name);
    setNumber(prevContact.number);
  }, [prevContact.name, prevContact.number])
  

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

    toast.success("Contact edited!", {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <ContactActionBox>
      <ContactHeader>
        Edit Contact
      </ContactHeader>
      <Form onSubmit={handleSubmit}>
        <UserBox>
          <ContactInput type="name" name='name' value={name} onChange={handleChange} />
          <ContactLabel text={!!name}>Name</ContactLabel>
        </UserBox>
        <UserBox>
          <ContactInput type="text" name='number' value={number} onChange={handleChange} />
          <ContactLabel text={!!number}>Number</ContactLabel>
        </UserBox>
        <ContactButton type="submit">Edit</ContactButton>
      </Form>
    </ContactActionBox>
  );
};

ContactActionForm.propTypes = {
    prevContact: PropTypes.object.isRequired,
    handleModal: PropTypes.func.isRequired,
};