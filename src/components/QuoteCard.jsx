import { useEffect, useState } from "react";
import styles from "./quote_card.module.css";

function QuoteCard({quote,target_id,onUpdate,onDelete}){

    const [editMode,setEditMode] = useState(false);

    const [default_quote,updateQuote] = useState(quote);

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



    return( 

        <div className={styles.wrapper}> 

        <button className={styles.edit} onClick={handle_edit}>Edit </button>

        <button className={styles.delete} onClick={()=>onDelete(target_id)}> Delete </button>
 
         {editMode?(<input type="text" value={default_quote} onChange={(e)=>updateQuote(e.target.value)}  />  ):  (<h2>"{quote} "</h2> ) }  
      
        {editMode && <button className={styles.update_button} onClick={() => { 
            onUpdate(target_id,default_quote);
            setEditMode(false);
        }}> UPDATE </button>}

        </div>

    );


}

export default QuoteCard;
