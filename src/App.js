import React from "react";
// import { Route } from 'react-router-dom';
// import { useSelector } from 'react-redux'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import List from "./Components/List/list";

const App = () => {
    
    return (
        <section className='app'>
            <Header />
            <List />
            <Footer />
        </section>
    );
}

export default App;
