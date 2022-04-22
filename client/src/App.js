import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import Trips from './components/trips/Trips';
import AddUser from './components/user/AddUser';
import PrivateRoute from './components/routing/PrivateRoute';
import { LOGOUT } from './actions/types';

import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);  
  return (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Alert />
      <Routes>
        <Fragment>
          <Route exact path="/" element={<Landing/>} />
            <Route exact path="/login" element={<Login />} />
            <Route path="dashboard" element={<PrivateRoute component={Dashboard} />}/>
            <Route path="add-user" element={<PrivateRoute component={AddUser} />} />
            {/* <Route path="trips" element={<PrivateRoute component={Trips} />}/> */}
        </Fragment>
      </Routes>
    </Router>
  </Provider>
  );
};

export default App;
