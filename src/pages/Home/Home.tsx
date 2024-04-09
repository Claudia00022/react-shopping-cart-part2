//Styles
import { Wrapper } from "./Home.style";
import backgroundImg from '../pageImg/backgrounImg.jpg';

const Home : React.FC = () =>{
    return(
    <>
    <Wrapper  style={{backgroundImage: `url(${backgroundImg}) `, height: '100vh' }}>
    <h1>klaudia</h1>
    </Wrapper>
    </>
)};


export default Home;