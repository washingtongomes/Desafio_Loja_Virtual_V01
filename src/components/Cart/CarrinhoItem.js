import React from "react";

export default function CarrinhoItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { incremento, descremento, removerItem } = value;

  return (

    <div className="container py-2">
    <div className="row">
      <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
        <h4>{title}</h4>
        <img src={img} className=" img-fluid" alt="product" />
        <h5 className="text-danger">
          <br></br> R$: {price}
        </h5>
        <h4 className=""> Quantidade:  {count}  </h4>
          <h5 className=""> Valor Total :  {total}  </h5>
          <h5 className="">  Total Items :  {total}  </h5>

            
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center"> <div>
         <div className="btn btn-black mx-1" onClick={() => descremento(id)}>
             -  </div>
        <div className="btn btn-black mx-1" onClick={() => incremento(id)}>
            +  </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <div className="cart-icon" onClick={() => removerItem(id)}>
    <i className="fas fa-trash" />
 
        </div>
        </div>
    </div>
    
  
    


  );
}