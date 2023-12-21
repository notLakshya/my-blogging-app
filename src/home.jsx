import React from 'react';
import MainFooter from './mainFooter';
import NavbarHome from './navbarHome';
import { Link } from 'react-router-dom';
function home(props) {
    return (
        <>
         <NavbarHome />
          <div>
            <h1>Welcome to Blogging app</h1>
            <Link to="/"></Link>
            <h3>Click below to begin</h3>
            <button><Link to='/Login'>Login</Link></button>
            <button><Link to='/RegisterUser'>Register User</Link></button>
          </div>  
         <MainFooter />  
        </>
    );
}

export default home;