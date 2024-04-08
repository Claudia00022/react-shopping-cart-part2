import { useState } from "react";

//Components
import Cart from "../Cart/Cart";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AddShoppingCart } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import Badge from "@mui/material/Badge";

//Types
import { CartItemType } from "../App";

//Styles
import {
  LogIn,
  NewLink,
  RightBorder,
  StyledButton,
} from "./CollapseNavbarStyle";

const logo = (
  <FontAwesomeIcon icon={faSpa} size="lg" style={{ color: "#ffffff" }} />
);

type Props = {
  cartItems: CartItemType[];
  totalItems: (items: CartItemType[]) => number;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const ColorSchemesExample: React.FC<Props> = ({
  totalItems,
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="opacity-50 bg-dark"
        data-bs-theme="dark"
      >
        <Container fluid>
          <Navbar.Brand href="#home">
            logo <span className="ms-3">{logo}</span>
          </Navbar.Brand>
          <RightBorder></RightBorder>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NewLink className=" ms-5 text-decoration-none text-light" to="/">
                home
              </NewLink>
              <RightBorder></RightBorder>
              <NewLink
                className="text-decoration-none text-light ms-5"
                to="/SkinCare"
              >
                skin care
              </NewLink>
              <RightBorder></RightBorder>
              <NewLink
                className="text-decoration-none text-light ms-5"
                to="/SkinCare"
              >
                body care
              </NewLink>
              <RightBorder></RightBorder>
              <NewLink
                className="text-decoration-none text-light ms-5"
                to="/SkinCare"
              >
                hair care
              </NewLink>
            </Nav>
            <LogIn>log IN </LogIn>

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
              <Badge badgeContent = {totalItems(cartItems)} color = "error">
              <AddShoppingCart style={{ color: "white" }} />
              </Badge>
              {/* <span>{}</span> */}
            </StyledButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ColorSchemesExample;
