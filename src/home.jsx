import React from 'react';
import MainFooter from './mainFooter';
import MainNavbar from './mainNavbar';
function home(props) {
    return (
        <>
         <MainNavbar />
          <div>
            <h1>Welcome to Blogging app</h1>
            <h3>Click below to begin</h3>
            <button>Login</button>
            <button>Register</button>
          </div>  
         <MainFooter />  
        </>
    );
}

export default home;