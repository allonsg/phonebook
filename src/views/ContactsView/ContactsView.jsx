import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter, fetchContacts } from 'redux/contactsSlice';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Contacts } from 'components/Contacts/Contacts';
import { Container } from './ContactView.styled';
import { getUser } from 'redux/userSlice';
import WithAuthRedirect from 'HOC/WithAuthRedirect';
import { Helmet } from 'react-helmet-async';

const ContactsView = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    if (!user) return;
    dispatch(fetchContacts());
  }, [dispatch, user]);

  const onFilterSearch = e => {
    dispatch(setFilter(e.target.value));
  };

  return (<>
    <Helmet>
        <title>My Contacts</title>
      </Helmet>
    <Container>
      {!!user ? <>
        {/* <Phonebook /> */}
      <Contacts
        onFilterSearch={onFilterSearch}
        filter={filter}
      /></>:  <h1> Log In to get access to ur contacts</h1>}
    </Container>
  </>
  );
}

export default WithAuthRedirect(ContactsView, '/login');

