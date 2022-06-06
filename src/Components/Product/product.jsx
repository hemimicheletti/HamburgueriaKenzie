import Button from "../Button/button"
import '../Product/product.css'

function Product({produto, handleClick, noCarrinho}){

    return noCarrinho ?(        
        <li className="produtosCarrinho">
            <div className="imgProdutoCarrinho">
            <img src={produto.img} alt={produto.name}/>
            </div>
            <div className="nomeEDescricao">
            <h1> {produto.name} </h1>
            <span> {produto.category} </span>
            </div>
            <div className="botaoRemoverCarrinho">
            <Button onClick={() => handleClick(produto.id)}> Remover </Button>
            </div>            
        </li>
        
    ):(
        <li className="produtos">
            <div className="imgProduto">
            <img src={produto.img} alt={produto.name}/>
            </div>
            <h1> {produto.name} </h1>
            <span> {produto.category} </span>
            <p> R$ {produto.price} </p>
            <div className="botaoAdicionar">
            <Button onClick={() => handleClick(produto.id)}> Adicionar </Button>
            </div>
            
        </li>
    );
}

export default Product