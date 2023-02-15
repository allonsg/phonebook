import { useDispatch, useSelector } from "react-redux";
import {deleteContact, getContacts, removeContact } from '../../redux/contactsSlice';
import { ContactListItem } from './ContactListItem/ContactListItem.jsx';
import { AddContactText, FilterInput, FiltertInputWrapper, List } from "./Contacts.styled";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ContactActionForm } from "components/ContactActionForm/ContactActionForm";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';

export const Contacts = ({ onFilterSearch, filter}) => {
  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [editContact, setEditContact] = useState({});
 
  const onDelete = id => {
    dispatch(removeContact(id));
    const updatedContacts = contactList.filter(
      contact => contact.id !== id
    );

    dispatch(deleteContact(updatedContacts));

    toast.success("Contact deleted!", {
      position: toast.POSITION.TOP_RIGHT
    });
  }

  const handleModal = (obj) => {
    setModalIsOpened(s => !s);
    setEditContact(obj);
  }

  const filtredContacts = contactList.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase().trim())
  );

  const filtredList = filtredContacts.length > 0
    ?
    filtredContacts.map(({ name, id, number }) => (<ContactListItem key={id} name={name} id={id} number={number} onDelete={onDelete} onEdit={handleModal} /> )) 
    :
    contactList.length > 0? <AddContactText>You have no contacts with that name :(</AddContactText> : <AddContactText>You have no contacts, so just add them!</AddContactText>;

  const list = contactList.length > 0
    ?
    contactList.map(({ name, id, number }) => (<ContactListItem key={id} name={name} id={id} number={number} onDelete={onDelete} onEdit={handleModal} /> ))
    :
    <AddContactText>You have no contacts, so just add them!</AddContactText>;

  return (
    <>
      <FiltertInputWrapper>
       <FilterInput
          type="text"
          name="filter"
          onChange={onFilterSearch}
          value={filter}
          autoComplete= 'off'
          placeholder = 'Find contacts by name'
        />
      </FiltertInputWrapper>
      <List>
        {filter? filtredList : list}
      </List>
            {modalIsOpened && <Modal closeModal={handleModal} modalIsOpened = {modalIsOpened}>
        <ContactActionForm prevContact={editContact} handleModal={handleModal} />
      </Modal>}
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};
