//Styles
import { Wrapper} from "./Home.style";
//Components
import { NavLink } from "react-router-dom";


//Types
type Props = {
    changeColorNav: () => void

}



const Home : React.FC<Props> = ({changeColorNav}) =>{
    return(
    <>
    <Wrapper>
        <div><h1>Self-love is the best love</h1></div>
         <NavLink to = "skinCare"><button onClick = {changeColorNav}>shop now</button></NavLink>
    </Wrapper>
    
    </>
)};


export default Home;