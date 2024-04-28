import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

//Types
import { CartItemType } from "../App";
//Styles
import { StyledCard, StyledCardTitle } from "./item.styles";
import { get } from "http";

type Props = {
  cartItems: CartItemType[];
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
  productAmount : number;
  handleAddToBasket : (items : CartItemType) => void; 
};

const Item: React.FC<Props> = ({
  item,
  handleAddToCart,
  handleRemoveFromCart,
  cartItems,
  productAmount,
  handleAddToBasket

}) => {


  const [product, setProduct] = useState(item)  



function handleAdd(amount: number) {
    setProduct((prev) =>({
      ...prev,
        amount: amount+1

    }))
};

function handleRemove(amount:number){
  if(product.amount === 1 ){
    setProduct((prev) =>({
      ...prev,
        amount: 1
  
    }))
  }else{
    setProduct((prev) =>({
    ...prev,
      amount: amount-1

  }))
  }
  
}

function test (){
  setProduct((prev) =>({
    ...prev,
      amount: 1

  }))
}


  // const cartQuantity = cartItems.reduce((amount,item) => productAmount + amount,0);
  // console.log(cartQuantity);

 


  return (
    <StyledCard className="mt-5">
      <Card.Img variant="top" src={item.image} />
      <Card.Body className="text-center">
        <StyledCardTitle>{item.title}</StyledCardTitle>
        <Card.Text className="fw-bold">{item.description}</Card.Text>

        <div className="buttons">
          <Button
            style={{
              width: "50px",
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
            variant="contained"
            onClick = {()=> {handleRemove(product.amount)}}
        
          >
            {" "}
            -{" "}
          </Button>
          <p>{product.amount}</p>
          <Button
            style={{
              width: "50px",
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
            variant="contained"
            onClick={() => {
              handleAdd(product.amount);
            }}
          >
            {" "}
            +{" "}
          </Button>
        </div>
        <Button onClick={() => {handleAddToCart(product); test()}}>Add to Basket</Button>
      </Card.Body>
    </StyledCard>
  );
};

export default Item;
