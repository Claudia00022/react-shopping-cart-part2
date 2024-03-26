import { useState } from "react";
import { useQuery } from "react-query";
//Components
import Item from "./Item/item";
import Cart from "./Cart/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//Styles
import { Wrapper,StyledButton } from "./App.styles";
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
  amount: number;
  image: string;
};

const getProducts = async () =>
  await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]); 

  const { isLoading, error, data } = useQuery("products", getProducts);
  if (isLoading) return <LinearProgress />;
  if (error) return <p>An error has occurred</p>;
  console.log(data);

  function getTotalItems(items: CartItemType[]) {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  }

  function handleAddToCart(clickedItem: CartItemType) {
    return null;
  }

  function handleRemoveFromCart() {
    return null;
  }
  return (
    <Wrapper>
      <Drawer anchor="right" open = {cartOpen} onClose={()=> setCartOpen(false)}>
       <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} ></Cart>
      </Drawer>
      <StyledButton onClick={()=> {setCartOpen(true)}} >
        <Badge badgeContent = {getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item: CartItemType) => (
          <Grid xs={12} sm={4} item key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
