import Product from "../Product";

const ProductList = function({products, showProductInfo}){



    const displayProducts = products.map((product)=><Product key={product.id} product={product} showProductInfo={showProductInfo} fromBasket={false}/>)


    return (
        <div className="product-list">
    
        <ul>
            {displayProducts}
        </ul>
         
         
      </div>
    )
};

export default ProductList