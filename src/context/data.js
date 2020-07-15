import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';
const API = process.env.API_SERVER || 'https://lab32-401.herokuapp.com';
const SECRET = process.env.JWT_SECRET || 'supersecret';
export const SettingsContext = React.createContext();
function SettingsProvider(props) {
  const [elementPerPage, setelementPerPage] = useState(3);
  const [sort, setSort] = useState('none');
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setUser(user);
    setToken(token);
  };

  const validateToken = (token) => {
    try {
      const u = jwt.decode(token);
      console.log('DECODED', u);
      const user = jwt.verify(token, SECRET);
      console.log('VERIFIED', user);
      setLoginState(true, token, user);
      console.log(loggedIn, 'bes', user);
    } catch (e) {
      setLoginState(false, null, {});
      console.log('Token validation Error', e.message);
    }
  };
  const login = async (username, password) => {
    console.log(username, password);
    try {
      let response = await fetch(`${API}/signin`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          Authorization: `Basic ${btoa(`${username}:${password}`)}`,
        }),
      });
      let res = await response.json();
      validateToken(res.token);
    } catch (e) {
      console.error(e.message);
    }
  };
  // packaging all of state and state methods in one obj
  const logout = () => {
    setLoginState(false, null, {});
  };

  const signup = async (username, email, password, role) => {
    console.log(username, password);
    try {
      let response = await fetch(`${API}/signup`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({ username, email, password, role }),
        headers: { 'Content-Type': 'application/json' },
      });
      let res = await response.json();
      console.log(res, 'bsbs moew');
      validateToken(res.token);
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
  }, []);

  const state = {
    elementPerPage,
    changePageNumber: setelementPerPage,
    sort,
    changeSort: setSort,
    show,
    setShow,
    loggedIn,
    user,
    logout,
    login,
    token,
    signup,
  };
  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsProvider;