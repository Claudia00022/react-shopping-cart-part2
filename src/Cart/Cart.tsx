import CartItem from "../CartItem/CartItem";
import { useState } from "react";

//Styles
import { Wrapper, StyledClosingTag } from "./Cart.style";

import { CartItemType } from "../App";
import { styled } from "@mui/styles";

//Types
type Props = {
    cartItems : CartItemType[];
    addToCart : (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}



const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => 
       items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    const[openAside, setOpenAside] = useState(false);

    function handleOpenAside(){
        setOpenAside(true);
    
    };

    function handleCloseAside(){
        setOpenAside(false);
    }
    
    return (
        < >
        
            {!openAside ? (
           <Wrapper>
        
            <StyledClosingTag onClick={handleOpenAside} />

            <h2 style={{fontSize:"1.5rem", marginBottom: "50px"}}>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem key = {item.id} item = {item} addToCart= {addToCart} removeFromCart = {removeFromCart} ></CartItem>
            ))}

            <h2 style={{fontSize:"1.3rem", marginTop:"20px"}}> Total : £ {calculateTotal(cartItems).toFixed(2)}</h2>
            </Wrapper>
        ):(  <StyledClosingTag onClick={handleCloseAside} /> )}
        </>
    )
};


export default Cart;