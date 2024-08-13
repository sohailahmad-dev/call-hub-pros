import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Career from '../pages/career/Career';

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Services' element={<Services/>}></Route>
                    <Route path='/Careers' element={<Career/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}