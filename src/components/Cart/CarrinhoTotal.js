import React from "react";
import { Link } from "react-router-dom";

export default function CarrinhoTotal({ value }) {
      const { cartSubtotal, cartTotal, cartImposto } = value;
     return (
           <React.Fragment>
                <div className=" container">  
                   <div className="row"  >  
                        <div className="col-10 mt-2 ml--5-5 ml-md-auto col-5m-8 text-capitalize text-right">  
                             <Link to="/">
                                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5 ">
                                         voltar
                                    </button>
                                </Link>

                                <Link to="/finalisa">
                                   <button className="btn btn-outline-danger text-uppercase mb-3 px-5 ">
                                         Finalizar
                                    </button>
                                </Link>
                             <div >
                        </div>
                     </div>
                     </div>
                     </div>
           </React.Fragment>
  );
}