import React, { Component } from "react";
import { ProdutoConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonVoltar } from "./Button";
import "./modal.css";

export default class Fim extends Component {
  render() {
    return (
      < ProdutoConsumer >
        {value => {
          const { id, title, img, price } =
            value.detalhesProduto;
          return (
            <div id="modal-promocao" className="container py-5">
                <div className="mt-auto">
                  <h4 className="text-white ml-2 "> Parabéns... ! </h4>
                  <h4 className="text-white ml-2">{title}</h4>
                  <img src={img} className="flex-column" alt="product" />
                  <h5 className=" text-sm-left text-danger">
                    <br></br> R$: {price}
                  </h5>

                  <Link to="/" className="btnLink">
                    <ButtonVoltar>
                      Inicio
                      </ButtonVoltar>
                  </Link>

                  <Link to="/modal"  className="btnLink2">
                    <ButtonVoltar onClick={() => {
                      value.addToCarrinho(id)
                    }}>
                      Compra Realizada....   OBRIGADO !!!
                      </ButtonVoltar>
                  </Link>
                </div>
                </div>
          )
        }}
      </ProdutoConsumer>
    );
  }
}
