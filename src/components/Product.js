import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProdutoConsumer } from "../context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProdutoWrapper className="col-9 mx-auto col-md-8 col-lg">
        <div className="card">
          <div className="img-container p-2" onClick={() => console.log("foto produto")}>

            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { console.log("add para carrinho") }}>
              {inCart ? (
                <p className="text-capitalize mb-8" disabled>
                  {""} ja existe
                </p>
              ) : (
                  <i className="fas fa-cart-plus" />
                )}
            </button>
            <div className="card-footer d-flex justify-content-between">
              <p className="align-self-center mb-0">
                {title}
              </p>
              <h3 className="text-blue font-italic mb-0">
                <span className="mr-1"> R$ </span>
                {price}
              </h3>
            </div>
          </div>
        </div>
        <h4>R$ {price} </h4>
      </ProdutoWrapper>
    );
  }
}
const ProdutoWrapper = styled.div`
.card{
  border-color:transparent;
  transition: all 1s linear;
  }

.card-footer{
  background: transparent;
  border-top:transparent;
  transition: all 1s linear;
 }

&:hover{
  .card{
    border: 0.08rem solid rgba(0,0,0,0.5);
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.8)
  }
  .card-footer{
    background: rgba(247,247,247);

  }
}
.img_container{
  position: relative;
  overflow:hidden;
}
.card-img-top{
  transition: all 1s linear;
}
.img-container:hover  .card-img-top{
  transform:scale(1.2);
}
`