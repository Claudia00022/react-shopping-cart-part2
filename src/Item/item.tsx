import Button from 'react-bootstrap/Button';
//Types
import { CartItemType } from "../App";
//Styles
// import { Wrapper } from "./item.styles";
import Card from 'react-bootstrap/Card';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


const Item : React.FC<Props> = ({item, handleAddToCart}) => (
      
    <Card className="mt-5" style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
       {item.description}
      </Card.Text>
      <Button variant="primary" onClick={()=> handleAddToCart(item)}>Add to cart</Button>
    </Card.Body>
  </Card>

);

export default Item;