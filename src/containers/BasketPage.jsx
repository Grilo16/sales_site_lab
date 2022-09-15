import BasketList from "../components/basketComponents/BasketList";


const BasketPage = function({basket, showProductInfo, products, checkOutBasket}){

    const totalPrice = basket.map((item) => item.price).reduce((totalValue, nextValue)=> totalValue+nextValue, 0).toFixed(2)
    const handleClick = function(){
        checkOutBasket()
    };

    return (
        <div className="basket-container">
        <div className="basket-details"> 
        <h2>You have selected {basket.length} items</h2>
        <h3>This will cost you £{totalPrice} quackers</h3>
        <button onClick={handleClick}>Give me your money</button>
        </div>
        <div className="basket-contents">
            <BasketList basket={basket} showProductInfo={showProductInfo} products={products}/>
        </div>
        </div>
    )
};

export default BasketPage