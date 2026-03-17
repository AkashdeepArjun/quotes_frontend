 import { useId, useState } from 'react';
import styles from './filters.module.css';
import DateSelector from './DateSelector';
function Filters({onFiltersApply}){

    const [start_date,setStartDate] = useState('');

    const [end_date, setEndDate] = useState('');

    const [is_open_start_date, setOpenStartDate]  = useState(false);


    const [is_open_end_date,setOpenEndDate] = useState(false);

    const  handle_start_date = (date) =>{


        console.log("FILTERS COMPONENT DATE START IS ",date);
        setStartDate(date);




    }

    const handle_end_date = (date) =>{


        console.log("FILTERS COMPONENT DATE END IS ",date);
        setEndDate(date);




    }

    const handle_filter_apply = () =>{

        console.log(`FILTER COMPONENT APPLY FILTER  START DATE ${start_date}  AND END DATE ${end_date} `);
        onFiltersApply(start_date,end_date);
    

    }



    return (

    
        <div className={styles.wrapper} >


        <DateSelector title={"SELECT START DATE"} OnDateSelected={handle_start_date} />

        
        <DateSelector title={"SELECT END DATE"}  OnDateSelected={handle_end_date} />


        <button onClick={handle_filter_apply}  disabled={!start_date || !end_date} >APPLY FILTERS </button>


            
        </div>







    )




}


export default Filters;
