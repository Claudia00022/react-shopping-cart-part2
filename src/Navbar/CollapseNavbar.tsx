import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { StyledButton } from '../App.styles';
import  Badge  from 'react-bootstrap/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState } from 'react';
import { CartItemType } from '../App';
import  Drawer  from '@material-ui/core/Drawer';
import Cart from '../Cart/Cart';


type Props = {
  cartItems : CartItemType[];
  totalItems: (items: CartItemType[]) => number;
  addToCart : (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
}


const ColorSchemesExample : React.FC<Props> = ({totalItems, cartItems, addToCart, removeFromCart}) => {

  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to = "/">Home</Link>
            <Link to ="/SkinCare">Features</Link>
          </Nav>
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

     
        <AddShoppingCartIcon /> 
         <span >{totalItems(cartItems)}</span>

    </StyledButton>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;