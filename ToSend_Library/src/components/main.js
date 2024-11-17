import React, { useState } from "react";
import Card from "./card";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=()=>{
        // if(evt.key==="Enter")
        // {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAKc7b9wMomsbT4y0hF91GNl_QJ_Eqlk24'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        // }
    }
    return(
        <>
           <div className="header">
               <div className="row1">
                   <h1>A room without books is like <br/> a body without a soul</h1>
               </div>
               <div className="row2">
                    <h2>Find your book</h2>
                    <div className="search">
                         <input type="text" placeholder="Enter Your Book Name"
                         value={search} onChange={e=>setSearch(e.target.value)}/>

                         <button onClick={searchBook}>Search</button>

                    </div>
                    <img src="./images/img2.jpg" alt="" />
               </div>

           </div>

           <div className="container">
            {
                   <Card book={bookData}/>
            }
           </div>
        </>
    )
}
export default Main;