import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { Form, UserBox} from "common/formStyles/formStyles";
import { ContactActionBox, ContactButton, ContactHeader, ContactInput, ContactLabel } from "common/contactFormStyles/contactFormStyles";
import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const AddContactForm = ({handleModal}) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

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

    const { name, number } = e.target.elements;
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase() || contact.number === number.value
    );

    if (existingContact) {
      toast.error("The contact already exists!", {
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    };

    const obj = {
      name: name.value,
      number: number.value.toString(),
    };

    dispatch(addContact(obj));

    number.value = '';
    name.value = '';
    handleModal();
    toast.success("Contact created!", {
      position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <ContactActionBox>
      <ContactHeader>
        Add Contact
      </ContactHeader>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <UserBox>
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
          <ContactLabel text={!!name}>Name</ContactLabel>
        </UserBox>
        <UserBox>
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
          <ContactLabel text={!!number}>Tel</ContactLabel>
        </UserBox>
      
        <ContactButton type="submit">Create contact</ContactButton>
      </Form>
    </ContactActionBox>
  );
};

AddContactForm.propTypes = {
    handleModal: PropTypes.func.isRequired,
};