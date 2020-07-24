import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../cart.png";
import styled from "styled-components";
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-info navbar-dark px-sm-5" >
        <Link to="/">
          <img src={logo} alt="loja" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center ">
          <li className="nav-item ml -5">
            
            <Link to="/" className="nav-link align-left">
              link Produtos
            </Link>
          </li>
        </ul>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
            <i className="fas fa-cart-plus " />
            </span>
           Meu carrinho
          </ButtonContainer>
        </Link>
      </nav>
  
    );
  }
}
