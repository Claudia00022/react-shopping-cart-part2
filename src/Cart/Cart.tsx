import CartItem from "../CartItem/CartItem";
//Styles
import { Wrapper } from "./Cart.style";

import { CartItemType } from "../App";

//Types
type Props = {
    cartItems : CartItemType[];
    addToCart : (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}



const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const calculateTotal = (items: CartItemType[]) => 
       items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    
    return (
        <Wrapper>
            <h2 style={{fontSize:"1.5rem", marginBottom: "50px"}}>Your Shopping Cart</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem key = {item.id} item = {item} addToCart= {addToCart} removeFromCart = {removeFromCart} ></CartItem>
            ))}

            <h2 style={{fontSize:"1.3rem", marginTop:"20px"}}> Total : £ {calculateTotal(cartItems).toFixed(2)}</h2>

        </Wrapper>
    )
};


export default Cart;