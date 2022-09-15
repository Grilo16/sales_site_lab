const Product = function({product, showProductInfo, fromBasket}){

    const handleClick = function(){
        if (!fromBasket){
            showProductInfo(product.id)
        }
    };

    return(
        <li onClick={handleClick} className="product">
        <p>{product.title}</p>
        <img src={product.image} height="80px" />
        <p>£{product.price}</p>
    </li>
    )
};

export default Product