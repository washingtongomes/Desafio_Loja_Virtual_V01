import React, { Component } from "react";
import { lojaProdutos, detalhesProduto } from "./data";
const ProdutoContext = React.createContext();

class ProdutoProvider extends Component {
  state = {
    products: [],
    detalhesProduto: detalhesProduto,
    cart: lojaProdutos,
    cartSubtotal:0,
    cartImposto:0,
    cartTotal:0

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

incremento = (id)=>{
  console.log("Inserindo produtos carrinho");
};

descremento = (id)=>{
  console.log("Retirando produtos carrinho");
};
removerItem = (id)=>{
  console.log("Remover produtos carrinho");
};
limparCarrinho = (id)=>{
  console.log("Limpar produtos carrinho");
};

  render() {
    return (
      <ProdutoContext.Provider value={{
        ...this.state,
        handleDetalhe: this.handleDetalhe,
        addToCarrinho: this.addToCarrinho,
        incremento: this.incremento,
        descremento: this.descremento,
        removerItem: this.removerItem,
        limparCarrinho:this.limparCarrinho



      }}>
        {this.props.children}
      </ProdutoContext.Provider>
    );
  }
}
const ProdutoConsumer = ProdutoContext.Consumer;
export { ProdutoProvider, ProdutoConsumer };