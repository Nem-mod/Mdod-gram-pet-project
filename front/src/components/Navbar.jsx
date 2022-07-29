import Logo from "./UI/Logo"
import Button from "./UI/Button"
export default function Navbar() {
  return (
    <nav className="navbar">
    <div className='container'>
        <div className="row navbar__row">
            <Logo></Logo>
            <Button tittle='sign in'></Button>
            <Button tittle='sign up'></Button>
        </div>
    </div>
  </nav>
  )
}
