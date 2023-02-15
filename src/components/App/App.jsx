import { lazy, useEffect, useState } from "react";
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
import localTheme from "common/localTheme";

const LazyRegisterView = lazy(() => import('views/RegisterView/RegisterView'));
const LazyLoginView = lazy(() => import('views/LoginView/LoginView'));
const LazyHomeView = lazy(() => import('views/HomeView/HomeView'));
const LazyContactsView = lazy(() => import('views/ContactsView/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const changeTheme = useSelector(getTheme);
  const [theme, setTheme] = useState(themeObj.light);

  useEffect(() => {
    if (!token) return;
    dispatch(getAuth());
    
    if (localTheme) {
  setTheme(localTheme.changeMode === 'true'? themeObj.dark : themeObj.light);
}
  }, [dispatch]);

  useEffect(() => {
  setTheme(changeTheme ? themeObj.dark : themeObj.light);
}, [changeTheme])

  

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
