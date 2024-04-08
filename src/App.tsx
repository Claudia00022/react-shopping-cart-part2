import { useState } from "react";
import { useQuery } from "react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Components

import Home from "./pages/Home";
import SkinCare from "./pages/SkinCare";
//Styles
import { Wrapper, StyledButton } from "./App.styles";
import ColorSchemesExample from "./Navbar/CollapseNavbar";
//Types
export type CartItemType = {
  id: number;
  image: string;
  title: string;
  price: number;
  description: string;
  amount: number;
};

// const getProducts = async () =>
//   await (await fetch("https://fakestoreapi.com/products")).json();

function App() {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  // const { isLoading, error, data } = useQuery("products", getProducts);
  // if (isLoading) return <LinearProgress />;
  // if (error) return <p>An error has occurred</p>;
  // console.log(data);

  function getTotalItems(items: CartItemType[]) {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  }

  function handleAddToCart(clickedItem: CartItemType) {
    setCartItems((prev) => {
      //1.Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      //First timem the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  }

  function handleRemoveFromCart(id: number) {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  }
  return (
    <>   <Router>
      <ColorSchemesExample
       totalItems={getTotalItems}
       cartItems={cartItems}
       addToCart={handleAddToCart}
       removeFromCart={handleRemoveFromCart}></ColorSchemesExample>
   
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/SkinCare"
            element={
              <SkinCare
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
               
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
