import { useState } from "react";
import styles from "./searchbar.module.css"
function SearchBar({onSearchChange}){

    const [user_query,setUserQuery] = useState('');

    const  handle_input = (e) =>{

        setUserQuery(e.target.value);
        onSearchChange(e.target.value);

    }


    return (

    <div >

        <input className={styles.searchbar} type="text" value={user_query} onChange={handle_input} placeholder="Search Quotes here ..."  />






    </div>


    );



}


export default SearchBar;
