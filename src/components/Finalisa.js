import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Finalisa extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Obrigado ! ! ! - Compra Finalizada.</h3>
 
        <Link to="/">
          <button className="btn btn-outline-danger text-uppercase mb-3 px-5 ">
            Inicio
                                    </button>
        </Link>
        </div>
      </React.Fragment>
    );
  }
}
