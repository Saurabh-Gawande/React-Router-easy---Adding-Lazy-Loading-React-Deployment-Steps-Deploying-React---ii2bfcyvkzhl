import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = () =>{
    return(
     <>
     <Link to='/' className='index-link'>Index</Link>
     <Link to='/home' className='home-link'>Home</Link>
     </>
    )
}