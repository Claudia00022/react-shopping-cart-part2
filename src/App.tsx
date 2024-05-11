import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Components

import Home from "./pages/Home/Home";
import SkinCare from "./pages/SkinCare/SkinCare";
import Footer from "./Footer/Footer";
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

function App() {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const [backgroundColor, setBackgroundColorNav] = useState(
    "rgba(5, 5, 5, 0.42)");
  const [borderColor, setBorderColor] = useState("#BEB985")
  
  const [productAmount, setProductAmount] = useState(0)  

  const [footerMarginTop, setFooterMarginTop] = useState("0px");
  
  


  function handleAddtoCartBasket (items:CartItemType){
    console.log(items.id);
    if(items.id === 0 ){
      setProductAmount(productAmount +1);
    }else{
      setProductAmount(productAmount);
    }

  } ;

  

 

  function getTotalItems(items: CartItemType[]) {   

    return items.reduce((ack: number, item) => ack + item.amount, 0);

  };

    function handleAddToCart(clickedItem: CartItemType) {
    setCartItems((prev) => {
      //1.Is the item already added in the cart?
  
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
     

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount:item.amount + clickedItem.amount }
            : item
        );
      }
      //First timem the item is added
      return [...prev, { ...clickedItem, amount: clickedItem.amount }]; 
    })
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
  };

  function handleIncreaseQuantity(id:number) {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount + 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  }

  function handleButtonClick(){
    setBackgroundColorNav("#98946B");
    setBorderColor("#FFFFFC");
    setFooterMarginTop("50px");
  };

  function handleButtonBack(){
    setBackgroundColorNav("rgba(5, 5, 5, 0.42)");
    setBorderColor("#BEB985");
    setFooterMarginTop("0px");
  };

//   const getItemQuantity = (id:number) =>{
//     return cartItems.find(items => items.id === id) ?.amount || 0
// };

// console.log(getItemQuantity);



  return (
    <>
      {" "}
      <Router>
        <ColorSchemesExample
          totalItems={getTotalItems}
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          buttonClick = {handleButtonClick}
          buttonBack = {handleButtonBack}
          backgroundColor= {backgroundColor}
          borderColor = {borderColor}
          increaseQuantity = {handleIncreaseQuantity}
        ></ColorSchemesExample>

        <Routes>
          <Route path="/" element={<Home changeColorNav={handleButtonClick} />} />

          <Route
            path="/SkinCare"
            element={
              <SkinCare
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                productAmount = {productAmount}
                handleAddToBasket = {handleAddtoCartBasket}
           
      
             
             
              />
            }
          />
        </Routes>
      </Router>
      <Footer
      footerMargin = {footerMarginTop}
      ></Footer>
    </>
  );
}

export default App;
