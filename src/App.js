import './App.css';
import React, { useEffect, useState } from "react"
import PageHeader from './components/PageHeader';
import SalesPage from './containers/SalesPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePageContainer from './containers/HomePage';
import BasketPage from './containers/BasketPage';
import PageNotFount from './components/PageNotFoud';
import ObjectData from './components/dataBase/ObjectData';

function App() {

    
  
  
  
  const [products, setProducts] = useState([])
  const [productToShow, setProductToShow] = useState({})
  const [basket, setBasket] = useState([])
  
  
  const getData = function(){
    const basketFromStorage = localStorage.getItem("basket")
    if (basketFromStorage > basket){
      setBasket(JSON.parse(basketFromStorage))
    } else {
      storeBasket(basket)
    }
    if (products.length === 0){
      setProducts(ObjectData)
      
      
      // MEEEH API Blocked me =./
      // fetch("https://fakestoreapi.com/products")
      // .then((res) => res.json())
      // .then(setProducts)
    };   
  };

  useEffect(()=>{
    getData()
    
  },[])
  
  const addToBasket = function(itemToAdd){
    if (basket){
      const newBasket = [itemToAdd, ...basket]
      setBasket(newBasket)
      storeBasket(newBasket)
      
      
    } else {
      setBasket([itemToAdd])
      storeBasket([itemToAdd])
    }
  };

  
  const storeBasket = function(data){
      return localStorage.setItem("basket", JSON.stringify(data))
  };

  const showProductInfo = function(productId){
    const product = products.filter((product) => product.id === productId)[0]
    setProductToShow(product)     
  };

  const checkOutBasket = function(){
      setBasket([])
      localStorage.clear()
  };


  return (
    <Router>
      <PageHeader basket={basket}/>
      <Routes>
        <Route exact path="/" element={<HomePageContainer/>}/>
        <Route exact path="/products" element={<SalesPage products={products} showProductInfo={showProductInfo} productToShow={productToShow} addToBasket={addToBasket} storeBasket={storeBasket}/>}/>
        <Route exact path="/basket" element={<BasketPage basket={basket} showProductInfo={showProductInfo} products={products} checkOutBasket={checkOutBasket}/>}/>
        <Route path="*" element={<PageNotFount/>}/>
      </Routes>
    </Router>
  );
}

export default App;
