import React, { Component } from "react";
import { ProdutoConsumer } from "../../context";
import {Link} from "react-router-dom";
import { ButtonVoltar } from "../Button";

export default class Cart extends Component {
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
                  <h2>Adicionado ao Carrinho... <br></br><b className="text-danger">Confirme para Finalizar Compra</b></h2>
                  <h4>{title}</h4>
                  <img src={img} className=" img-fluid" alt="product" />
                  <h5 className="text-danger">
                    <br></br> R$: {price}
                  </h5>
                    <Link to="/details">
                      <ButtonVoltar>
                        Inicio
                      </ButtonVoltar>
                    </Link>
                           
                    <Link to="/modal">
                      <ButtonVoltar onClick={()=>{
                          value.addToCarrinho(id)
                      } }>
                          Confirmar
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

