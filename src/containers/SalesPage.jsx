import ProductDetails from "../components/salesPageComponents/ProductDetails";
import ProductList from "../components/salesPageComponents/ProductList";


const SalesPage = function({products, showProductInfo, productToShow, addToBasket, storeBasket}){

    return (
        <div className="page-container">
          <div className="page-contents">
          <ProductList products={products} showProductInfo={showProductInfo}/>
          <ProductDetails productToShow={productToShow} addToBasket={addToBasket} storeBasket={storeBasket}/>

        </div>
      </div>
    )
};

export default SalesPage