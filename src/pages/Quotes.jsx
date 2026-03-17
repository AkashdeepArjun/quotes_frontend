import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../services/api";

import styles from "./quotes.module.css";
import QuoteCard from "../components/QuoteCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import Filters from "../components/Filters";

function Quotes(){

    const [start_date,setStartDate] = useState('');

    const [end_date ,setEndDate] =  useState('');

    const [quotes,setQuotes] = useState([]);

    const [ datasize ,setDataSize] = useState(0);

    const [user_query, setUserQuery] = useState('');

    const [sortBy,setSortBy]=useState("created_at");

    const [order,setOrder] = useState("DESC");


    const [limit,setLimit] = useState(3);

    const [current_page,setCurrrentPage] = useState(1);

  

    const fetchQuotes = async(search) => {

        console.log(` FEETCH  QUOTES CALLED WITH  START DATE  ${start_date} AND END DATE ${end_date}`); 
    
       try{ const server_response =  await api.get(`/quotes?search=${search}&page=${current_page}&limit=${limit}&sortBy=${sortBy}&order=${order}&startDate=${start_date}&endDate=${end_date}`);
        setQuotes(server_response.data.data);
        setDataSize(server_response.data.dataset_size);
        }catch(err){

            console.log(err);
        }



    }


    useEffect(()=>{


    fetchQuotes(user_query);


    },[current_page,order,sortBy,start_date,end_date]);

  const handle_delete = (id ) =>{

      console.log("RECIVED ID ",id);
    
      api.delete(`/quotes/${id}`).then(res =>{
          
        // load_data();

        fetchQuotes('');  

      }).catch(err=>{

            console.log(err);



      })
    


  }

  const handle_page_update = (new_page) =>{

    setCurrrentPage(new_page);




  }

const handle_sort_option = (option) =>{ setSortBy(option)}

const handle_order = (order) => { setOrder(order)}

const handle_update = (id,newQuote) =>{

    api.put(`/quotes/${id}`,{quote:newQuote}).then(res => {

    
        // load_data();
        
        fetchQuotes('');


    }  ).catch(err => {console.log(err)})
}

useEffect(()=>{


const delayed_search =  setTimeout(()=>{

    if(user_query.length <2){
        if(user_query.length==0){
            fetchQuotes('');
            return;
        }
    }
    fetchQuotes(user_query);

},500);


    return ()=>clearTimeout(delayed_search);



},[user_query]);


const handle_filters=(s,e)=>{


    setStartDate(s);
    setEndDate(e);



}






    return (

        <div className={styles.wrapper}>


        <Filters onFiltersApply={handle_filters} />

        <Sorting onOrderSelected={handle_order} onSortOptionsSelected={handle_sort_option} />

        
        <Pagination dataset_size={datasize} page_size={limit} OnPageChange={handle_page_update} />


        <SearchBar onSearchChange={setUserQuery} />



            <div className={styles.container_quotes}> 
                
                    {quotes && quotes.map((quote) => 

                <QuoteCard key={quote.id} quote={quote} onUpdate={handle_update} onDelete={handle_delete} />


                    )}

        
        
            </div>
        


        </div>


    );



}

export default Quotes;
