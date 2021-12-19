import React, { useEffect } from "react";
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Header from './Components/Header/header';

const App = () => {
    
    return (
        <section className='app'>
            <Header />
        </section>
    );
}

export default App;
