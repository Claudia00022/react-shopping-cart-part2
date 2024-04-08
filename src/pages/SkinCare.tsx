

import { Wrapper } from "../App.styles";


import { Grid } from "@mui/material";

import  {CartItemType}  from "../App";

import Item from "../Item/item";
import itemsProducts from "../itemsProducts";


    type Props = {
        cartItems : CartItemType[];
        addToCart : (clickedItem: CartItemType) => void;
        removeFromCart: (id: number) => void;
       
    }


const SkinCare : React.FC<Props> = ({cartItems, addToCart, removeFromCart}) =>{
    // const [cartOpen, setCartOpen] = useState(false);
    return(
    <Wrapper>
    {/* <Drawer
      anchor="right"
      open={cartOpen}
      onClose={() => setCartOpen(false)}
    >
      <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
      ></Cart>
    </Drawer> */}
    {/* <StyledButton
      onClick={() => {
        setCartOpen(true);
      }}
    >
      <Badge badgeContent={totalItems(cartItems)} color="error">
        <AddShoppingCartIcon />
      </Badge>
    </StyledButton> */}

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



