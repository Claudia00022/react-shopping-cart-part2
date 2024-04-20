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
import Button from "@mui/material/Button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";

//Types
import { CartItemType } from "../App";

//Styles
import {
  NewLink,
  RightBorder,
  StyledButton,
  StyledNavbar,
  PageLink,
  CartButton,
  StyledDropdown,
  PageLinkSkinCare
} from "./CollapseNavbarStyle";

const logo = (
  <FontAwesomeIcon icon={faSpa} size="lg" style={{ color: "#ffffff" }} />
);

type Props = {
  cartItems: CartItemType[];
  totalItems: (items: CartItemType[]) => number;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  buttonClick: () => void;
  buttonBack: () => void;
  backgroundColor: string;
  borderColor: string;
};

const ColorSchemesExample: React.FC<Props> = ({
  totalItems,
  cartItems,
  addToCart,
  removeFromCart,
  buttonClick,
  buttonBack,
  backgroundColor,
  borderColor,
}) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <StyledNavbar
     
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1000,
          width: "100vw",
          backgroundColor: backgroundColor,
          transition: "background-color 2s ease-out",
        }}
      >
        <Container fluid>
          <NewLink onClick={buttonBack} to="/#home">
            logo <span className="ms-3">{logo}</span>
          </NewLink>
          <RightBorder></RightBorder>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <PageLink onClick={buttonBack} to="/" >
                home
              </PageLink>
              <RightBorder></RightBorder>
              <PageLinkSkinCare onClick={buttonClick} to="/SkinCare">
                skin care
              </PageLinkSkinCare>
              <StyledDropdown>
                <Dropdown.Toggle id="dropdown-autoclose-true"> skin care   </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/#SkinCare" onClick={buttonClick}>all products </Dropdown.Item>
                    <StyledDropdown>
                      <DropdownToggle id="dropdown-autoclose-true"> type of skin</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                      </DropdownMenu>
                    </StyledDropdown>
                    <StyledDropdown>
                      <DropdownToggle id="dropdown-autoclose-true">products</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                      </DropdownMenu>
                    </StyledDropdown>
                    <StyledDropdown>
                      <DropdownToggle id="dropdown-autoclose-true"> ingredients</DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                        <DropdownItem>lorem ipsum</DropdownItem>
                      </DropdownMenu>
                    </StyledDropdown>
                    
                  </Dropdown.Menu>
             
              </StyledDropdown>

              <RightBorder></RightBorder>
              <PageLink to="/SkinCare">body care</PageLink>
              <RightBorder></RightBorder>
              <PageLink to="/SkinCare">hair care</PageLink>
            </Nav>
            <CartButton
              onClick={() => {
                setCartOpen(true);
              }}
              style={{ marginRight: "60px" }}
            >
              <Badge badgeContent={totalItems(cartItems)} color="error">
                <AddShoppingCart style={{ color: "white" }} />
              </Badge>
            </CartButton>
            <StyledButton
              style={{
                borderColor: borderColor,
              }}
            >
              Log in{" "}
            </StyledButton>

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
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </>
  );
};

export default ColorSchemesExample;
