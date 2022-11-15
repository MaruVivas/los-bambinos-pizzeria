import "./Navbar.css";
import logo from "../../assets/white-oven.png"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const setActive = ({ isActive }) => isActive ? 'active' : 'unactive';
    
    return (
        <header className="navbar-header">
            <div className="logo">
                <img src={ logo } alt="logo"></img>
                <div className="brand">
                    <h1>Los Bambinos</h1>
                    <p>Pizzas a leña</p>
                </div>
            </div>
            
            <div className="links-container">
                <NavLink to="/" className={ setActive } end>Los Bambinos</NavLink>
                <NavLink to="/pizzas" className={ setActive }>Menú</NavLink>
            </div>
            
        </header>
    )

}

export default Navbar