import NavBar from "./NavBar";
import Logo from "../components/Logo";
import { Link } from 'react-router-dom';
import user from "../assets/img/user.svg";
import bag from "../assets/img/bag.svg";


function Header() {
  return (
    <header>
      <div>
        <Logo />
        <form>
          <input type="text" placeholder="Search Products" />
        </form>
        <div>
        <img src={user} alt="user icon" />
        <Link to="/signin">Sign in</Link>
        </div>
       <div>
       <img src={bag} alt="bag icon" />
       <Link to="/cart">Cart</Link>
       </div>
        
      </div>
      <NavBar />
    </header>
  )
}

export default Header