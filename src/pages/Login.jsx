import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import styles from "./login.module.css";

function Login(){

    const [email,setMail] = useState('');

    const [password ,setPassword]  =  useState('');


    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const handle_login = async (e) => {


    e.preventDefault();

    try {

        setLoading(true);
        const response = await api.post("/auth/login",{email,password});
        
        const token  = response.data.token;

        localStorage.setItem("token",token);

        navigate("/quotes");

        // setLoading(false);


    } catch (error) {

        setLoading(false);
        console.log(error);
        alert(' login failed with error message ${error}');

        
    }








    }







    return (

        <div className={styles.wrapper}>


            <form onSubmit={handle_login}>

            <input type="email" name="email" value={email} onChange={(e)=>setMail(e.target.value)}  placeholder="Email here "/>


            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password here "/>

        
            <button type="submit" disabled={loading} > Sign In  </button>


            </form>


            <Link to="/signup" className={styles.signup}>  <button> Sign Up </button> </Link>



        </div>


    );



}

export default Login;
