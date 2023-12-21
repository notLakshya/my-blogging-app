import React from 'react';
import NavbarHome from './navbarHome';
import MainFooter from './mainFooter';
import { Link } from 'react-router-dom';
import catImage from './cat.png';
function home(props) {
    return (
        <>       
          <NavbarHome />
          <div>
            <h1>Welcome to Blogging app</h1>
            <img src={catImage} alt="catImage" className="img-fluid w-100" style={{ height: "150px" }} />
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