import React, { Component } from "react";
import {lojaProdutos, detalhesProduto} from "./data";
const ProdutoContext= React.createContext();

class ProdutoProvider extends Component{
  state={
   products: lojaProdutos, 
   detalhesProduto: detalhesProduto,
  };
  handleDetalhe = ( ) =>{
    console.log("Legal! detalhes");
  };

  addToCarrinho = () =>{
    console.log("Pagina carrinho...!");
  };

  render(){
    return (
     <ProdutoContext.Provider value = {{
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
export  {ProdutoProvider, ProdutoConsumer};