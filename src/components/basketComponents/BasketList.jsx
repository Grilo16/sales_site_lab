import Product from "../Product";

const BasketList = function({basket, showProductInfo}){



    const displayProducts = basket.map((product)=><Product key={product.SaleId} product={product} showProductInfo={showProductInfo} fromBasket={true}/>)


    return (
        <div className="product-list">
    
        {basket.length > 0 ?
        <ul>
            {displayProducts}
        </ul>
            :<>
             <h3>You have no items in your basket soz</h3>
            <img src="https://media1.giphy.com/media/ueKysdAthOwtq/giphy.gif?cid=ecf05e47l35ug09kkdklhb7oeio0azx1jw0460kc1islkuqt&rid=giphy.gif&ct=g" alt="" />
            </>
        }
         
         
      </div>
    )
};

export default BasketList