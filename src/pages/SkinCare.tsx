import { Drawer } from "@material-ui/core";
import Cart from "../Cart/Cart";
import { StyledButton } from "../App.styles";
import { Wrapper } from "../App.styles";
import Badge from "@material-ui/core/Badge";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import  {CartItemType}  from "../App";

import Item from "../Item/item";
import itemsProducts from "../itemsProducts";


    type Props = {
        cartItems : CartItemType[];
        addToCart : (clickedItem: CartItemType) => void;
        removeFromCart: (id: number) => void;
        totalItems: (items: CartItemType[]) => number;
    }


const SkinCare : React.FC<Props> = ({cartItems, addToCart, removeFromCart, totalItems}) =>{
    const [cartOpen, setCartOpen] = useState(false);
    return(
    <Wrapper>
    <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
    >
      <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
      ></Cart>
    </Drawer>
    <StyledButton
      onClick={() => {
        setCartOpen(true);
      }}
    >
      <Badge badgeContent={totalItems(cartItems)} color="error">
        <AddShoppingCartIcon />
      </Badge>
    </StyledButton>

    <Grid container spacing={3}>
      {itemsProducts.map((item: CartItemType) => (
        <Grid xs={12} sm={4} item key={item.id}>
          <Item item={item} handleAddToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  </Wrapper>
    )
};


export default SkinCare;



