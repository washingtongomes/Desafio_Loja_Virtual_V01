import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProdutoConsumer } from "../context";
import PropTypes from "prop-types";
import {ProdutoWrapper} from "./StyleProduct";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProdutoWrapper className="col-9 mx-auto col-md-8 col-lg">
        <div className="card">

          <ProdutoConsumer>
          {value => (<div className="img-container p-5" onClick={() => value.handleDetalhe(id)}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { value.addToCarrinho(id);
             }}> 
              {inCart ? (
                <p className="text-capitalize mb-8" disabled>
                  {""} ja existe
                </p>
              ) : (
                  <i className="fas fa-cart-plus" />
                )}
            </button >
          </div>)}
            </ProdutoConsumer>

          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0"> {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1"> R$    </span>
              {price}
            </h5>
          </div>
        </div>
      </ProdutoWrapper>
    );
  }
}
Product.prototype.products={
  product: PropTypes.shape({
   id: PropTypes.number,
   title: PropTypes.string,
   img: PropTypes.string,
   price: PropTypes.number,
   inCart: PropTypes.bool,


}).isRequired
};

