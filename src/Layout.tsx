import ColorSchemesExample from "./Navbar/CollapseNavbar";
import { Outlet } from "react-router-dom";

const Layout :React.FC = () =>{
    return(
        <>
        <ColorSchemesExample  />
        <main>
            <Outlet />
        </main>
    </>
    )
};


export default Layout;