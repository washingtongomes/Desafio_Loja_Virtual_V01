import React, { Component } from "react";
import { ProdutoConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonVoltar } from "./Button";

export default class Details extends Component {
  render() {
    return (
      < ProdutoConsumer >
        {value => {
          const { id, title, img, price} =
            value.detalhesProduto;
          return (

            <div className="container py-5">
              <div className="row">
                <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h4>Codigo: {id}</h4>
                  <h4>Descrição: {title}</h4>
                  <h5 className="text-danger">
                    <br></br> Valor R$: {price}
                  </h5>
                  <h1> <b className="text-danger">COMPRA REALIZADA COM SUCESSO ! ! !</b></h1>

                  <img src={img} className=" img-fluid" alt="product" />
                    
                        </div>
                  </div>
                </div>
          )
        }}
      </ProdutoConsumer>
    );
  }
}
