//Styles
import {
  Wrapper,
  Title,
  HorizontalLine,
  StyledAccordionHeader,
  StyledAccordion
} from "./SkinCare.style";

//Components
import { CartItemType } from "../../App";
import Item from "../../Item/item";
import itemsProducts from "../../itemsProducts";
import Accordion from "react-bootstrap/Accordion";

//Types
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const SkinCare: React.FC<Props> = ({ addToCart }) => {
  return (
    <>
      <Title>skin care</Title>
      <HorizontalLine></HorizontalLine>
      <Wrapper className="container-fluid">
        <div className="row  justify-content-between">
          <div
            style={{
              marginLeft: "80px",
              paddingRight: "40px",
              borderRight: "1px solid #BEB985 ",
            }}
            className="col-2"
          >
            <StyledAccordion  defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="border-0">
                <StyledAccordionHeader>type of skin </StyledAccordionHeader>
                <Accordion.Body className="fs-6">
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="border-0">
                <StyledAccordionHeader>products </StyledAccordionHeader>
                <Accordion.Body>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="border-0">
                <StyledAccordionHeader>ingredients</StyledAccordionHeader>
                <Accordion.Body>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                </Accordion.Body>
              </Accordion.Item>
            </StyledAccordion>
          </div>
          <div className="  col-12  col-sm-12 col-md-12 col-lg-9">
            <div className="  row " style={{marginRight:0, marginLeft:0}}>
              {itemsProducts.map((item: CartItemType) => (
                <div className="col col-md-6 col-lg-6 col-xl-4"  key={item.id}>
                  <Item item={item} handleAddToCart={addToCart} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SkinCare;
