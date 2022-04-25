import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import styled from "styled-components";
//  import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav style={{
          color:"white",
          fontSize:"20px",
          gap:"50px",
          display:"flex",
          backgroundColor:"blue",
          // height:"100px",
         padding:"50px",
         textAlign:"center",
         marginBottom:"20px",
         fontFamily:"sans-serif"
      }}>
        {/* keep all the NavLinks here */}
        
       
       <Link to='./Home' style={{color:"white",textDecoration:"none"}}>Home</Link>
        <Link to='./About' style={{color:"white",textDecoration:"none"}}>About</Link>
        <Link to='./Books'style={{color:"white",textDecoration:"none"}}>books</Link>
        <Link to='./Login' style={{color:"white",textDecoration:"none"}}>Login</Link>
        <Link to='./Logout' style={{color:"white",textDecoration:"none"}}>Logout</Link>
      </nav>
    </>
  );
};
