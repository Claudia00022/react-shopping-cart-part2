import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//Types
import { CartItemType } from "../App";
//Styles
import { StyledCard, StyledCardTitle} from './item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


const Item : React.FC<Props> = ({item, handleAddToCart}) => (
      
    <StyledCard className="mt-5">
    <Card.Img variant="top" src= {item.image} />
    <Card.Body className='text-center' >
      <StyledCardTitle>{item.title}</StyledCardTitle>
      <Card.Text className='fw-bold'>
       {item.description}
      </Card.Text>
      <Button  onClick={()=> handleAddToCart(item)}>Add to Basket</Button>
    </Card.Body>
  </StyledCard>

);

export default Item;