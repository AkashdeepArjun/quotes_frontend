import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


function Navbar(){

    const navigate = useNavigate();
    


    const token = localStorage.getItem("token");



     const current_url = useLocation();
    
  const handle_logout = (e) =>{

        e.preventDefault();

        localStorage.removeItem("token");
        window.location.href="/";




    }

   

    return(
        <nav style={styles.nav} > 
            
            <Link  to="/quotes"  className={`{styles.links}  { styles.quotes} {styles.act} `} > QUOTES </Link> 

            <Link to="/addQuote" styles = {styles.links } > ADD QUOTE  </Link>

            {token &&  <button onClick={handle_logout}> LOGOUT  </button> }
            
            {!token &&  <Link to="/"  styles = {styles.links}> LOGIN   </Link> }
      

        </nav>












    );




}


export default Navbar;

