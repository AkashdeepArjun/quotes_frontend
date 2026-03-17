import { useState } from "react";
import styles from   "./datepicker.module.css" 
import { DateInput } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';



function DateSelector ({title,OnDateSelected}) {


    const [start_date,setStartDate ] = useState(new Date());

    const handle_date_update = (newdate) => {


                setStartDate(newdate);
                OnDateSelected(convertDate(newdate));

                console.log(
            'DATE SELECTED ',convertDate(start_date));
            
            
                   


    }

    const convertDate = (date) => {

        if(!date){
            return '';
        }

        const d = new Date(date);

        return d.toISOString().split('T')[0];



    }



    return(

        <div className={styles.wrapper}>

            


        <DateInput  value={start_date} label={title} placeholder={title} style={{flex:1}}  onChange={handle_date_update}/>




        </div>




    )



}


export default DateSelector;
