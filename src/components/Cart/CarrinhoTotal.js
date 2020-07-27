import React from "react";
import { Link } from "react-router-dom";

export default function CarrinhoTotal({ value }) {
      const { cartSubtotal, cartTotal, cartImposto } = value;
     return (
           <React.Fragment>

                                   <div className="btn-fin01">
                                   <Link to="/">
                                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5 ">
                                         voltar
                                    </button>
                                   </Link>

                                   <Link to="/finaliza">
                                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5 ">
                                         Finalizar
                                    </button>
                                    </Link>
                                </div>
           </React.Fragment>
  );
}