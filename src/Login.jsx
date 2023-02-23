import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '911349366639-no5c6jj7k93d4vpdtmpaiu7cmn2f0of4.apps.googleusercontent.com';

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  // const clientId = '';

  const onloginSuccess = (res) => {
    console.log('login success >>', res);
    // console.log('login failured >>', res.profileObj);
    setShowLogin(false);
    setShowLogout(true);
  };

  const onFailureSuccess = (res) => {
    console.log('login failured >>', res);
  };

  const logoutHandler = () => {
    alert('logout successfully');
    setShowLogin(true);
    setShowLogout(false);
  };

  return (
    <>
      <div>
        {showLogin ? <GoogleLogin clientId={clientId} buttonText='Login with google' onSuccess={onloginSuccess} onFailure={onFailureSuccess} cookiePolicy={'none'} /> : null}

        {showLogout ? <GoogleLogout clientId={clientId} buttonText='Logout' onLogoutSuccess={logoutHandler}></GoogleLogout> : null}
      </div>
    </>
  );
};

export default Login;
