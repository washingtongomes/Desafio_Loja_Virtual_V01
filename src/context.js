import React, { Component } from "react";
import { lojaProdutos, detalhesProduto } from "./data";
const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
  state = {
    products: [],
    detalhesProduto: detalhesProduto,
    cart: []
  };
  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    lojaProdutos.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
pegarItem = id=>{
  const product = this.state.products.find(item=>item.id ===id);
  return product;
};
handleDetalhe = id => {
  const product = this.pegarItem(id);
    this.setState(()=>{
      return {detalhesProduto:product}
    });
};

addToCarrinho = id=> {
let tempProducts = [...this.state.products];
const index = tempProducts.indexOf(this.pegarItem(id));
const product = tempProducts[index];
product.inCart = true;
product.count=1;
const price = product.price;
product.total = price;
this.setState(() =>{
  return {product:tempProducts, cart:[...this.state.cart]}
}, 
()=>{console.log(this.state);
}
);

};

  render() {
    return (
      <ProdutoContext.Provider value={{
        ...this.state,
        handleDetalhe: this.handleDetalhe,
        addToCarrinho: this.addToCarrinho
      }}>
        {this.props.children}
      </ProdutoContext.Provider>
    );
  }
}
const ProdutoConsumer = ProdutoContext.Consumer;
export { ProdutoProvider, ProdutoConsumer };