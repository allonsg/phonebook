import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAuth } from "redux/userSlice";
import Layout from "views/Layout/Layout";
import { GlobalStyle } from "./App.styled";
import { ToastContainer } from 'react-toastify';
import token from 'common/token';
import 'react-toastify/dist/ReactToastify.min.css';
import { ThemeProvider } from 'styled-components';
import * as themeObj from 'theme';
import { getTheme } from "redux/themeSlice";
// import { useMediaQuery } from "react-responsive";


const LazyRegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LazyLoginView = lazy(() => import('views/LoginView/LoginView'));
const LazyHomeView = lazy(() => import('views/HomeView/HomeView'));
const LazyContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export const App = () => {
  // const isMobScreen = useMediaQuery({ query: '(max-width: 767.98px)' });
  // const isTabScreen = useMediaQuery({ query: '(min-width: 768px)' });
  // const isBeforeDescScreen = useMediaQuery({ query: '(max-width: 1279.98px)' });
  // const isAfterDescScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const dispatch = useDispatch();
  const changeTheme = useSelector(getTheme);
  useEffect(() => {
    if (!token) return;
    dispatch(getAuth());
  }, [dispatch]);

  const theme = changeTheme ? themeObj.dark : themeObj.light;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" />} />
            <Route exact path="home" element={<LazyHomeView />} />
            <Route exact path="contacts" element={<LazyContactsView />} />
            <Route exact path="login" element={<LazyLoginView />} />
            <Route exact path="register" element={<LazyRegisterView />} />
          </Route>
          <Route exact path="*" element={<Navigate to="/home" />}/>
        </Routes>
        <GlobalStyle />
        <ToastContainer />
      </ThemeProvider>
    </>
  );
};
