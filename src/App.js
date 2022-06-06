import "./reset.css";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductList from "./Components/ProductsList/productList";
import Cart from "./Components/Cart/cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [busca, setBusca] = useState("");
  const [foiPesquisado, setfoiPesquisado] = useState(false);

  // Consumindo API
  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(
        `https://hamburgueria-kenzie-json-serve.herokuapp.com/products`
      );
      setProducts(response.data);
    }
    fetchProducts();
  }, []);

  // Adicionando ao Carrinho
  const handleClick = (productId) => {
    const produtoIgual = currentSale.some(
      (produto) => produto.id === productId
    );
    if (currentSale.length === 0) {
      const verificaProduto = products.find(
        (produto) => produto.id === productId
      );
      setCurrentSale([...currentSale, verificaProduto]);
    } else {
      if (!produtoIgual) {
        const verificaProduto = products.find(
          (produto) => produto.id === productId
        );
        setCurrentSale([...currentSale, verificaProduto]);
      }
    }
  };

  // Busca
  const showProducts = () => {
    const itemPesquisa = busca.toLowerCase();
    if (itemPesquisa === "" || itemPesquisa === " ") {
      setfoiPesquisado(false);
    } else {
      setFilteredProducts(
        products.filter((produto) => {
          if (itemPesquisa === produto.name.toLowerCase()) {
            return produto;
          }
        })
      );
      setfoiPesquisado(true);
    }
  };

  // Renderizando na Tela
  return foiPesquisado ? (
    <div className="App">
      <header className="cabecalho">
        <img src={require("../src/Image/MaskGroup.png")} />
        <div className="inputBotao">
          <input
            type="text"
            placeholder="Digitar pesquisa"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          ></input>
          <button onClick={showProducts}>Pesquisar</button>
        </div>
      </header>
      <div className="divConteudo">
        <ProductList products={filteredProducts} handleClick={handleClick}>
          {" "}
        </ProductList>
        <Cart currentSale={currentSale} cartTotal={cartTotal} setCartTotal={setCartTotal}>
          {" "}
        </Cart>
      </div>
    </div>
  ) : (
    <div className="App">
      <header className="cabecalho">
        <img src={require("../src/Image/MaskGroup.png")} />
        <div className="inputBotao">
          <input
            type="text"
            placeholder="Digitar pesquisa"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
          ></input>
          <button onClick={showProducts}>Pesquisar</button>
        </div>
      </header>
      <div className="divConteudo">
        <ProductList products={products} handleClick={handleClick}>
          {" "}
        </ProductList>
        <Cart currentSale={currentSale} cartTotal={cartTotal} setCartTotal={setCartTotal}>
          {" "}
        </Cart>
      </div>
    </div>
  );
}

export default App;
