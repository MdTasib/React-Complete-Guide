import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function Module_10() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main style={{ marginTop: '6rem' }}>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default Module_10;
