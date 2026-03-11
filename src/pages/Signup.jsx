import { useEffect, useState } from "react";
import styles from "./signup.module.css"
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Signup(){


    const [user_interacted,setUserInteraction] = useState(false);


    const navigate  = useNavigate();
    
    const [isProcessing,setProcessing] = useState(false);


    const [username,setUsername] = useState('');

    const [email,setEmail] = useState('');
    
    const [password,setPassword] = useState('');
    
    const handle_signup = async (e) =>{


    
        e.preventDefault();
    

        setProcessing(true);


        api.post('/auth/signup',{username,email,password})
            .then(res => {
            navigate("/quotes");
            setUserInteraction(false);
            setProcessing(false);
            })
            .catch(err=>{
                console.log("error",err);
                setUserInteraction(false);
                setProcessing(false);



            })



        

    }

    useEffect(()=>{
    },[])
    
    

    return(

        <div className={styles.wrapper}>


            
            <form onSubmit={handle_signup}>

            <input type="text" placeholder="username" value={username} onChange={(e)=>{ setUsername(e.target.value); 
            
                setUserInteraction(true);

            }} />

            { user_interacted && username==='' && (<label className={styles.error}> username can not be empty  </label>)}
            
            <input type="email" placeholder="email" value={email} onChange={ (e)=>{setEmail(e.target.value);
            setUserInteraction(true);

            }} />
            { user_interacted && email==='' && (<label className={styles.error}> email can not be empty  </label>)}

            <input type="password" placeholder="password" value={password} onChange={(e)=>{ setPassword(e.target.value);

            setUserInteraction(true);

            }} />

            
            {user_interacted && password==='' && (<label className={styles.error}> password can not be empty  </label>)}

            
            <button type="submit" disabled= {username==='' || email==='' || password==='' | isProcessing} className={styles.submit_button}> REGISTER </button>

                    


        

            </form>










        </div>



    );


}


export default Signup;
