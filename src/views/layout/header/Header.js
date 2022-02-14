import { Link } from 'react-router-dom';

import "./Header.css"
import Logo from "./img/logo-code7.png"

const Header = () => {

    return (
        <div className='header'>
            <Link to={`/`}>
                <img src={Logo}></img>
            </Link>

            <div className='nav'>
                <Link to={`/users`}>
                    Users
                </Link>
            </div>
        </div>
    )

}

export default Header