const PageHeader = function({basket}){

    
    return(
        <div className="page-header">
  
        <h1 className="page-title">The best of the sales website LOL</h1>
        <nav className="nav-bar">
          <a href="/">Homepage</a>
          <a href="/products">Products</a>
          <a href="/basket">View Basket ({basket.length})</a>
        </nav>
    
        <hr />
          </div>
    )
};

export default PageHeader