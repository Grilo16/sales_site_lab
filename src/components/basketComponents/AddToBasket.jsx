const AddToBasket = function({addToBasket, productToAdd, storeBasket}){

  const handleSubmit = function(e){
    e.preventDefault()
    productToAdd.SaleId = (Date.now()/1000).toFixed(0)
    addToBasket(productToAdd)
  };
    
  return (
        <form onSubmit={handleSubmit}className="product-description-form" action="">
        <button >Add To Basket</button>
      </form>
    )
};

export default AddToBasket
