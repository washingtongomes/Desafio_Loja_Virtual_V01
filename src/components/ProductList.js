import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProdutoConsumer } from "../context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="NOSSOS " title=" PRODUTOS" />
            <div className="row" >
              <ProdutoConsumer>
                {value => {
                 return value.products.map(product => {
                    return<Product key ={product.id}product={product} />;
                    console.log(value);
                  
                });
                }}
              </ProdutoConsumer>
            </div>
          </div>
        </div >
      </React.Fragment >
    );
  }
}
