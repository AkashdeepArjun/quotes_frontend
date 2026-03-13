import { useEffect, useState } from "react";
import styles from "./quote_card.module.css";

function QuoteCard({quote,onUpdate,onDelete}){

    const [editMode,setEditMode] = useState(false);

    const [default_quote,updateQuote] = useState(quote.quote);

    const handle_edit = () =>{

    
            setEditMode(!editMode);
    }

   

    useEffect(()=>{

 const handle_esc = (event) =>{

        if(event.key==='Escape'){

            setEditMode(false);

        }


    }

        window.addEventListener("keydown",handle_esc);

        
        return () => {
            window.removeEventListener("keydown",handle_esc);
        };



    },[]);


    const convert_date = (input_date) =>{

const dateObj = new Date(input_date);

// Format: MM/DD/YYYY, h:mm:ss AM/PM
const formattedDate = dateObj.toLocaleString('en-US', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

        return formattedDate;

}



    return( 

        <div className={styles.wrapper}> 

        <button className={styles.edit} onClick={handle_edit}>Edit </button>

        <button className={styles.delete} onClick={()=>onDelete(quote.id)}> Delete </button>
 
         {editMode?(<input type="text" value={default_quote} onChange={(e)=>updateQuote(e.target.value)}  />  ):  (<h2>"{quote.quote} "</h2> ) }  
      
        {editMode && <button className={styles.update_button} onClick={() => { 
            onUpdate(quote.id,default_quote);
            setEditMode(false);
        }}> UPDATE </button>}


        <h4 className={styles.created}>{convert_date(quote.created_at)}</h4>

        </div>

    );


}

export default QuoteCard;
