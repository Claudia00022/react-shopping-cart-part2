import { Button } from "@mui/material";
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
           <img src={item.image}></img>
      <div>
        <h3 style={{fontSize:"1rem", fontWeight: "bold"}}>{item.title}</h3>
        <div className="information">
          <p>Price : £{item.price}</p>
          <p>Total: £{(item.amount * item.price).toFixed(2)}</p>
        </div>
        
        <div className="buttons">
          <Button
            size="small"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
            disableElevation
            variant="contained"
            onClick={() => {
              removeFromCart(item.id);
            }}
          >
            {" "}
            -{" "}
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
            disableElevation
            variant="contained"
            onClick={() => {
              addToCart(item);
            }}
          >
            {" "}
            +{" "}
          </Button>
        </div>
      </div>
   
    </Wrapper>
  );
};

export default CartItem;
