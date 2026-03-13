import { useEffect } from "react";
import styles from "./pagination.module.css";



function Pagination({dataset_size,page_size,OnPageChange}){

    const number_of_pages = Math.ceil(dataset_size / page_size);


    useEffect(()=>{

        





    },[])



    return(

        <div className={styles.wrapper}>

        { Array.from({length:number_of_pages},(_,i)=>(

            <div className={styles.item} key={i} onClick={()=>OnPageChange(i+1)}>


                <h3>{i+1}</h3>

            </div>
        )


        )}







        </div>



    );







}


export default Pagination;
