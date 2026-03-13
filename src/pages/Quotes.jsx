import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../services/api";

import styles from "./quotes.module.css";
import QuoteCard from "../components/QuoteCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Quotes(){


    const [quotes,setQuotes] = useState([]);

    const [ datasize ,setDataSize] = useState(0);

    const [user_query, setUserQuery] = useState('');

    const [limit,setLimit] = useState(3);

    const [current_page,setCurrrentPage] = useState(1);

    const  load_data = () => {


        api.get("/quotes").then((res)=>setQuotes(res.data));


    }

    const fetchQuotes = async(search) => {

        
       try{ const server_response =  await api.get(`/quotes?search=${search}&page=${current_page}&limit=${limit}`);
        setQuotes(server_response.data.data);
        setDataSize(server_response.data.dataset_size);
        }catch(err){

            console.log(err);
        }



    }


    useEffect(()=>{


    fetchQuotes(user_query);


    },[current_page]);

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




    return (

        <div className={styles.wrapper}>


        
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
