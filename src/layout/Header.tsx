import NavBar from "./NavBar";
import Cart from "../views/Cart";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
     <Link to="/cart">Cart</Link>
      <NavBar />
    </div>
  )
}

export default Header