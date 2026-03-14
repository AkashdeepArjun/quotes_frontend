import styles from "./sorting.module.css";

function Sorting({ onSortOptionsSelected ,onOrderSelected }){


    return (

        <div>

        <label> SORT BY </label>

        <button onClick={()=>onSortOptionsSelected("created_at")}>DATE</button>

        <button onClick={()=>onSortOptionsSelected("quote")}>QUOTE </button>

        <button onClick={()=>onOrderSelected("ASC")} >ASC </button>
        

        <button onClick={()=>onOrderSelected("DESC")} >DESC </button>

    
        

            
    




        </div>





    )





}


export default Sorting;
