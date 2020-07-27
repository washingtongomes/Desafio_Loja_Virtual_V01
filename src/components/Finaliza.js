import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Finalisa extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="txt-fin">
        <h2>Compra Finalizada.</h2>
        
            <Link to="/">
          <div className="btn-fin">
          <button className="btn btn-outline-danger  mb-3 px-5  ">
          <h5>Obrigado ! ! ! <br></br> Clique para retornar compra </h5>
          </button>
            </div>
            
         </Link>
            
        </div>
      </React.Fragment>
    );
  }
}
