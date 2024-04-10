//Styles
import { Wrapper} from "./Home.style";
//Components
import { NavLink } from "react-router-dom";



const Home : React.FC = () =>{
    return(
    <>
    <Wrapper>
        <div><h1>Self-love is the best love</h1></div>
         <NavLink to = "skinCare"><button>shop now</button></NavLink>
    </Wrapper>
    </>
)};


export default Home;