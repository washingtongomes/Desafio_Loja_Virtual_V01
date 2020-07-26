import React, { Component } from "react";
import Title from '../Title';
import cartColunas from "./cartColunas";
import VazioCart from "./VazioCart";
import { ProdutoConsumer } from "../../context";
import CarrinhoList from "./CarrinhoList";

export default class Cart extends Component {
  render() {
    return (
      <section >
        <ProdutoConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                <Title name=" " title=" Produtos"></Title>
                <cartColunas />
                <CarrinhoList value={value}/>

                </React.Fragment>
              );
            }else{
                return <VazioCart />;
                            }
          }}
        </ProdutoConsumer>
      </section>

    );
  }
}

