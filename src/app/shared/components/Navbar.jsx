import "./Navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { CgClose } from "react-icons/cg"
import { Link } from "react-router-dom";

const Navbar = () => {
    
    

    function toggleMenu (event) {
      const nav = document.getElementById("nav");
      nav.classList.toggle("active");
      const active = nav.classList.contains("active");
      event.currentTarget.setAttribute("aria-expanded", active)
      if(active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
      } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
      }
    } 
      
    return (
        <header className="header" id="header">
              <Link to="/pagina-inicial"><h3 className="logo">Logo</h3></Link>
            
              

                <nav className="nav" id="nav">
                  <button onClick={toggleMenu} className="menu-mobile" id="menu-mobile" aria-expanded="false" aria-controls="menu" aria-haspopup="true" aria-label="Abrir Menu"><BiMenuAltRight />
                  
                  
                  </button>
                  <button onClick={toggleMenu} className="close-menu" id="close-menu"><CgClose /></button> 

                  <ul className="menu" id="menu" role="menu">
                    <Link to="/home"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/services"><li>Games</li></Link>
                    <Link to="/team"><li>Team</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>       
                  </ul>
                </nav>
    
        </header>
    )
}

export default Navbar;