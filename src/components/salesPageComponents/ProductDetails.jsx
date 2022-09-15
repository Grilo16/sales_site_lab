import AddToBasket from "../basketComponents/AddToBasket";

const ProductDetails = function({productToShow, basket, addToBasket, storeBasket}){

    return (
        <>
        {productToShow.title ?
        <div className="product-description">
        <h2>{productToShow.title}</h2>
        <img src={productToShow.image} height="420px" width="420px"/>      
        <div className="product-details">
        <h3>product details</h3>
        <p>{productToShow.description}</p>
        </div>
        <h4>Only :</h4>
        <h3>£{productToShow.price}</h3>
        <AddToBasket productToAdd={productToShow} basket={basket} addToBasket={addToBasket} storeBasket={storeBasket}/>
      </div>
        :
        <div className="product-description">
        <h3>Select a product to show details</h3>
        </div>
        }
        </>
    )
};

export default ProductDetails