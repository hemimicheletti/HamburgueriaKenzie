import Product from "../Product/product"
import "./productsList.css"

function ProductList({products, handleClick}){
    return(
        <ul className="ulProductList">
            {products.map((produto, index) => 
                <Product produto={produto} key={index} handleClick={handleClick}>

                </Product>
            )}
        </ul>
    )
}

export default ProductList