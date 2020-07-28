import React, { Component } from "react";
import { ProdutoConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonVoltar } from "./Button";

export default class Details extends Component {
  render() {
    return (
      < ProdutoConsumer >
        {value => {
          const { id, title, img, price } =
            value.detalhesProduto;
          return (

            <div className="container py-5">
              <div className="row">
                <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
                <h2>Detalhes do Produto...</h2>

                  <h4>{title}</h4>
                  <img src={img} className=" img-fluid" alt="product" />
                  <h5 className="text-danger">
                    <br></br> R$: {price}
                  </h5>
                    <Link to="/">
                      <ButtonVoltar>
                        Voltar
                      </ButtonVoltar> 
                    </Link>
                       
                           
                    <Link to="/cart">
                      <ButtonVoltar onClick={()=>{
                          value.addToCarrinho(id)
                      } }>
                          Comprar
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
