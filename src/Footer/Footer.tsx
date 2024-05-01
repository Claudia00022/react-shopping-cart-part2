//Styles
import { Wrapper } from "./Footer.style";

//Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fa}

const facebook = (<FontAwesomeIcon icon={faSquareFacebook} size="sm" style={{color: "#ffffff",}} />)



const Footer : React.FC = ()=>{
    return (
      <Wrapper>
    
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <span>logo</span>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
    </ul>
  </footer>

</Wrapper>
    )
};

export default Footer;


