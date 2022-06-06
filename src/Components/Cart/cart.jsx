import "./cartStyle.css"
import Product from "../Product/product";
import Button from "../Button/button";

function Cart({currentSale, cartTotal, setCartTotal}){

    const precoInicial = 0;
    setCartTotal(currentSale.reduce((acumulador, precoAtual) => {
    return (acumulador + precoAtual.price)
    }, precoInicial))
    const noCarrinho = true    

    return(        
        <div className="carrinho">
            <div className="carrinhoH1">
                <h1> Carrinho de Compras</h1>
            </div>
            <div>{currentSale.map((produto, index) =>
                <Product produto={produto} key={index} noCarrinho={noCarrinho}> </Product>
            )}</div>
            <div className="rodapeCarrinho">
                <div className="pCarrinho">
                <p className="pTotal">Total</p>
                <p className="pValor"> R$ {cartTotal.toFixed(2).replace('.', ',')} </p>
                </div>
                <div className="botaoRemoveTodos">
                <Button >Remover todos</Button>
                </div>
                
            </div>
        </div>
    )
}

export default Cart