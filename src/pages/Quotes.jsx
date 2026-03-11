import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";

import styles from "./quotes.module.css";
import QuoteCard from "../components/QuoteCard";

function Quotes(){


    const [quotes,setQuotes] = useState([]);

    const  load_data = () => {


        api.get("/quotes").then((res)=>setQuotes(res.data));


    }


    useEffect(()=>{


    load_data();


    },[]);

  const handle_delete = (id ) =>{

      console.log("RECIVED ID ",id);
    
      api.delete(`/quotes/${id}`).then(res =>{
          
        load_data();

      }).catch(err=>{

            console.log(err);



      })
    


  }


const handle_update = (id,newQuote) =>{

    api.put(`/quotes/${id}`,{quote:newQuote}).then(res => {

    
        load_data();
        


    }  ).catch(err => {console.log(err)})
}



    return (

        <div className={styles.wrapper}>

            <h2>Quotes Popular this week </h2>

            <div className={styles.container_quotes}> 
                
                    {quotes && quotes.map((quote) => 

                <QuoteCard key={quote.id} quote={quote.quote} target_id ={quote.id} onUpdate={handle_update} onDelete={handle_delete} />


                    )}

        
        
            </div>
        


        </div>


    );



}

export default Quotes;
