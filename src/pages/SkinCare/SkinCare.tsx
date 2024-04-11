//Styles
import { Wrapper } from "./SkinCare.style";

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
      <Wrapper>
        <div className="acc">
          <p>skin care</p>
          <hr></hr>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border-0">
              <Accordion.Header>type of skin </Accordion.Header>
              <Accordion.Body>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border-0">
              <Accordion.Header>products </Accordion.Header>
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
              <Accordion.Header>ingredients</Accordion.Header>
              <Accordion.Body>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="w-75 ms-auto row ">
          {itemsProducts.map((item: CartItemType) => (
            <div className="col-4" key={item.id}>
              <Item item={item} handleAddToCart={addToCart} />
            </div>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default SkinCare;
