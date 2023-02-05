import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth } from "../redux/userSlice";
import Layout from "views/Layout";
import { GlobalStyle } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import token from 'common/token';
import tokenA from 'common'
import 'react-toastify/dist/ReactToastify.min.css';

const LazyRegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LazyLoginView = lazy(() => import('views/LoginView/LoginView'));
const LazyHomeView = lazy(() => import('views/HomeView/HomeView'));
const LazyContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(getAuth());
  }, [dispatch]);
  
  console.log(tokenA);
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
           <Route index element={<Navigate to="home" />} />
          <Route exact path="home" element={<LazyHomeView />} />
          <Route exact path="contacts" element={<LazyContactsView/>} />
          <Route exact path="login" element={<LazyLoginView/>} />
          <Route exact path="register" element={<LazyRegisterView/>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <ToastContainer />
    </>
  );
};
