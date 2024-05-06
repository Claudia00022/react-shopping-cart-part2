import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

//Styles
import { Wrapper } from './Footer.style';



const Footer : React.FC = () =>{
    return(
        <Wrapper>
        <div className="container" style={{backgroundColor: "BEB985"}}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><FacebookIcon></FacebookIcon></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><InstagramIcon></InstagramIcon></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><TwitterIcon></TwitterIcon></a></li>
    </ul>
  </footer>
</div>
</Wrapper>
    )
}


export default Footer;