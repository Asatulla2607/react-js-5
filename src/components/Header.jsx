import LOGO from "../img/header-logo.svg"
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  
    const navigate = useNavigate()
    return(
        <div id="header">
            <div className="container">
                <div className="header">
                    <Link to='/'>
                    <img src={LOGO} alt="img" />
                    </Link>
                    <div className="header-nav">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/recipes">Recipes</NavLink>
                        <NavLink to="/Popular">Popular</NavLink>
                        <NavLink to="/topRated">TopRated</NavLink>
                    </div>
                    <div className="header-buttons">
                        <button onClick={() =>navigate('/')}>Sign in</button>
                        <button>Request demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;