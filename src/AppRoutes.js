import React from 'react';
import { Outlet, Route ,Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
        <>
    <Routes>
        <Route index element={<Index/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Outlet/>
        </>
   
    )
}