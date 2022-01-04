import React from "react";
import {Route} from 'react-router-dom';
// import { useSelector } from 'react-redux'
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import List from "./Components/List/list";
import Cart from "./Components/Cart/cart";
import ShippingDetails from "./Components/ShipingDetails/shippingDetails";
import AllProducts from "./Components/AllProducts/allProducts";

const App = () => {
    
    return (
        <section className='app'>
            <Header />
            <div className='app-content'>
                <Route path='/' exact component={List} />
                <Route path='/cart' component={Cart} />
                <Route path='/checkout' component={ShippingDetails} />
                <Route path='/all' component={AllProducts} />
            </div>
            <Footer />
        </section>
    );
}

export default App;
