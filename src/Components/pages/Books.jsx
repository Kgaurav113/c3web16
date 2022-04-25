
import React from "react";
import { useEffect, useState } from "react";

//import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";
import { SingleBook } from "./SingleBook";
export const Grid = styled.div`
  #books-containe{
    display: "grid";
    grid-template-columns: "repeat(43,1fr)";
    height: "500px";
    margin:"auto";
    grid-template-rows: "repeat(auto,auto)";
  } 
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
   const BooksData =async()=>{

    let res = await fetch("http://localhost:3000/Books") ;
    let data1 = await res.json();
    setData(data1)
   }
   BooksData();
  }, []);

  const postData =async(item)=>{

    let res = await fetch("http://localhost:8080/Books",{
      method:"POSt",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(item)})

  }

  // console.log(data)
  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
         
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {
            data.map((item)=>{
              
              return(
                <>
                  <div style={{border:"1px gray"}} onClick={postData}>
                  <h3>{item.title}</h3>
                  <img src={item.thumbnailUrl} alt="" />
                  <h3>{item.isbn}</h3>
                  
                  <SingleBook  data={data} key={item.id}/>

                  </div>
                  
                </>
              )
              
            })
          }
          
      </Grid>
    </>
  );
};
export default Books;