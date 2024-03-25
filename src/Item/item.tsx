import Button from 'react-bootstrap/Button';
//Types
import { CartItemType } from "../App";
//Styles
import { Wrapper } from "./item.styles";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}


const Item : React.FC<Props> = ({item, handleAddToCart}) => (
    // <Wrapper>
    // <Container >
    //     <Row>
    //      <Col>
    //     <img src={item.image} alt={item.title} />
    //     </Col>
    //     <Col>
    //         <h3>{item.title}</h3>
    //         <p>{item.description}</p>
    //         <h3>£ {item.price}</h3>
    //     </Col>
    //     </Row>
    //     <Button  onClick = {()=> handleAddToCart(item)}>Add to cart</Button>{''}
    // </Container>
    // </Wrapper>
    <Wrapper>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {item.image} />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Text>
       {item.description}
      </Card.Text>
      <Button variant="primary" onClick={()=> handleAddToCart(item)}>Add to cart</Button>
    </Card.Body>
  </Card>
  </Wrapper>
);

export default Item;