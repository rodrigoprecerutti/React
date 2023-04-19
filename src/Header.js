import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='Header'>
            <h1>Essa é a tela Header</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Header;
