import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function AddQuote(){

    const navigate = useNavigate();

    const [ quote,setQuote ]=  useState('');



    const handle_submit = (e)=> {

        e.preventDefault();

         api.post('/quotes',{quote:quote}).then(res=>{ 
             console.log("response we got was ",res);
            navigate("/quotes");

        }).catch(err=>console.log(err));

        

    }

   



    return(

        <div>  

            <form onSubmit={handle_submit}>


            <input type="text" placeholder="quote here" onChange={(e)=>setQuote(e.target.value)} value={quote} />


            <button type="submit">SAVE QUOTE </button>

            

            </form>






        </div>
    );











}


export default AddQuote;
