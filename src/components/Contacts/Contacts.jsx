import { useDispatch, useSelector } from "react-redux";
import {deleteContact, getContacts, removeContact } from '../../redux/contactsSlice';
import { ContactListItem } from './ContactListItem/ContactListItem.jsx';
import { FilterInput, FiltertInputWrapper, List } from "./Contacts.styled";
import { useState } from "react";
import { Modal } from "components/Modal/Modal";
import { ModalForm } from "components/ModalForm/ModalForm";
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
  }

  const handleModal = (obj) => {
    setModalIsOpened(s => !s);
    setEditContact(obj);
  }

  const filtredContacts = contactList.filter(({ name }) =>
    name.toLowerCase().startsWith(filter.toLowerCase().trim())
  );

  const list = filtredContacts.map(({ name, id, number }) => (
    <ContactListItem key={id} name={name} id={id} number={number} onDelete={onDelete} onEdit={handleModal} />
  ));

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
      {/* <FilterLabel>Find contacts by name</FilterLabel> */}
      {/* <List>
        {list}
      </List> */}
            {modalIsOpened && <Modal closeModal={handleModal} modalIsOpened = {modalIsOpened}>
        <ModalForm prevContact={editContact} handleModal={handleModal} />
      </Modal>}
    </>
  );
};

Contacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterSearch: PropTypes.func.isRequired,
};
