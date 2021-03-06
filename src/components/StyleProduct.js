
import styled from "styled-components";

export const ProdutoWrapper = styled.div`
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
    border: 0.04rem solid rgba(0,0,0,0.5);
    box-shadow: 3px 3px 3px 0px rgba(0,0,0,0.8)
  }
  .card-footer{
    background: rgba(247,247,247);
  }
}
.img-container{
  position: relative;
  overflow:hidden;
}
.card-img-top{
  transition: all 1s linear;
}
.img-container:hover  .card-img-top{
  transform:scale(1.2);
}

.cart-btn{
  position:absolute;
  bottom: 0;
  right:0;
  padding:0.2rem 0.4rem;
  border: none;
  color: var(--lightGreen2);
  font-size:1.4rem;
  border-radius: 0.5rem; 0 0 0 ;
  transform: translate(100% , 100%);
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
color: var(--lightRed);
cursor: pointer;
}

`;