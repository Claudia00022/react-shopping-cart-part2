import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

//Types
import { CartItemType } from "../App";
//Styles
import { StyledCard, StyledCardTitle} from './item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
}


const Item : React.FC<Props> = ({item, handleAddToCart, handleRemoveFromCart}) => {
  const[productAmount, setProductAmount] = useState(0);

  function handleProductAmount(){
    setProductAmount(productAmount + 1);
  }; 

  function handleRemoveProductAmount(){
    setProductAmount(productAmount - 1);
    if(productAmount ===0){
      setProductAmount(0);
    }
  }
    

     return(
      
    <StyledCard className="mt-5">
    <Card.Img variant="top" src= {item.image} />
    <Card.Body className='text-center' >
      <StyledCardTitle>{item.title}</StyledCardTitle>
      <Card.Text className='fw-bold'>
       {item.description}
      </Card.Text>
      <div className="buttons">
          <Button
    
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
          
            variant="contained"
            onClick={() => { handleRemoveFromCart(item.id); handleRemoveProductAmount() } }
          
          >
            {" "}
            -{" "}
          </Button>
          <p>{productAmount}</p>
          <Button
           
            style={{
              backgroundColor: "transparent",
              color: "black",
              border: "1px solid rgba(0, 0, 0, 0.4)",
              borderRadius: 0,
            }}
         
            variant="contained"
            onClick={() => {
              handleAddToCart(item);
              handleProductAmount();
             
            }}
          >
            {" "}
            +{" "}
          </Button>
        </div>
      <Button  onClick={()=> handleAddToCart(item)}>Add to Basket</Button>
    </Card.Body>
  </StyledCard>
     )

    };

export default Item;