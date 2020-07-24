import React, { Component } from "react";
import Product from "./Product";
import {detalhesProduto } from "../data";
import ProductList from './ProductList';
import { ProdutoConsumer } from '../context';

export default class Details extends Component {
  render() {
    return (
      <div>
    <h3>Detalhes</h3>
    
    <React.Fragment>
    <div className="row align-items-ml-1" >
    <ul>
    Codigo do produto:          { detalhesProduto.id}<br></br>
    Produto :                           { detalhesProduto.title}<br></br>
    Valor Produto:                  { detalhesProduto.price}<br></br>

    </ul>
    </div>
    </React.Fragment>
    </div>
    );
  }
}
