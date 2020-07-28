import React, { Component } from "react";
import { ProdutoConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonVoltar } from "./Button";
import "./modal.css";

export default class Details extends Component {
  render() {
    return (
      < ProdutoConsumer >
        {value => {
          const { id, title, img, price } =
            value.detalhesProduto;
          return (
            <div id=" modal-promocao" className="modal-container">

              <div className="row">
                <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h4 className="text-white"> Parabéns... ! </h4>
                  <h4 className="text-white">{title}</h4>
                  <img src={img} className=" img-fluid" alt="product" />
                  <h5 className="text-danger">
                    <br></br> R$: {price}
                  </h5>

                  <Link to="/">
                    <ButtonVoltar>
                      Inicio
                      </ButtonVoltar>
                  </Link>

                  <Link to="/modal">
                    <ButtonVoltar onClick={() => {
                      value.addToCarrinho(id)
                    }}>
                      Compra Realizada....   OBRIGADO !!!
                      </ButtonVoltar>
                  </Link>
                </div>
              </div>
            </div>
          )
        }}
      </ProdutoConsumer>
    );
  }
}
