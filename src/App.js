import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Carousel from './components/Carousel';
import ShopName from './components/ShopName';
import ProductDetail from './components/ProductDetail';
import Counter from './components/Counter';
import Footer from './components/Footer';
import PropTypes from 'prop-types';



function App(props) {

    let productDetails = props.products.map((p) => <ProductDetail product = {p} />);


    return (
      <div className="App">
     {/*<Header>*/}
     <Header />
    {/*</Header>*/}
 
    <div className="container">

        <div className="row">

            
            {/*<ShopName>*/}
                <ShopName />
                {/*</ShopName>*/}
            

            <div className="col-md-9">
                {/*<Carousel>*/}
                <Carousel />
                {/*</Carousel>*/}
                <div className="row">
                    {/*<ProductDetail>*/}
                    {productDetails}
                </div>

            </div>

        </div>

    </div>
   
    <div className="container">

        <hr/>

      {/*<Footer>*/}
        <Footer/>
       {/*</Footer>*/}
    </div>
      </div>
    );
}

export default App;