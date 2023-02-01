import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <NavLink to="/">All Products</NavLink>
      <NavLink to="/packaging">Packaging</NavLink>
      <NavLink to="/drinkware">Drinkware</NavLink>
      <NavLink to="/apparel">Apparel</NavLink>
      <NavLink to="/notebooks">Notebooks</NavLink>
      <NavLink to="/backpacks">Backpacks</NavLink>
    </nav>
  )
}

export default NavBar