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
import NavDropdown from "react-bootstrap/NavDropdown";

//Types
import { CartItemType } from "../App";

//Styles
import {
  RightBorder,
  StyledButton,
  StyledNavbar,
  PageLink,
  CartButton,
  StyledDropdown,
  PageLinkSkinCare,
  StyledNavbarBrand,
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
          <StyledNavbarBrand onClick={buttonBack} href="/#">
            logo <span className="ms-3">{logo}</span>
          </StyledNavbarBrand>
          <RightBorder></RightBorder>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <PageLink onClick={buttonBack} href="/#">
                home
              </PageLink>
              <RightBorder></RightBorder>
              <PageLinkSkinCare onClick={buttonClick} href = "/#SkinCare">
                skin care
              </PageLinkSkinCare>

              <StyledDropdown title="skin care" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                  all products
                </NavDropdown.Item>
                <StyledDropdown
                  title="type of skin"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    type of skin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    type of skin
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    type of skin
                  </NavDropdown.Item>
                </StyledDropdown>

                <StyledDropdown title="products" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    products
                  </NavDropdown.Item>
                </StyledDropdown>

                <StyledDropdown
                  title="ingredients"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    ingredients
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    ingredients
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#SkinCare" onClick={buttonClick}>
                    {" "}
                    ingredients
                  </NavDropdown.Item>
                </StyledDropdown>
              </StyledDropdown>

              <RightBorder></RightBorder>

              <PageLink href="#SkinCare" onClick={buttonClick}>
                body care
              </PageLink>

              <RightBorder></RightBorder>

              <PageLink href="#SkinCare" onClick={buttonClick}>
                hair care
              </PageLink>

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
