import {} from './styles';
import Logo from '../../assets/header-images/logo.svg';
import CarrinhoIcon from '../../assets/header-images/carrinho-icon.svg';
import FavoritoIcon from '../../assets/header-images/favorito-icon.svg';
import * as S from './styles';
import { Link } from "react-router-dom";

function Header() {

    return (
        <header>
            <div>
                <S.Wrapper>
                    <Link to="/" > <img src={Logo} /> </Link>
                    <nav>
                        <S.Ul>
                            <li>
                                <Link to="/carrinho" > <img src={CarrinhoIcon} /> </Link>
                            </li>
                            <li>
                                <Link to="/favoritos" > <img src={FavoritoIcon} /> </Link>
                            </li>
                        </S.Ul>
                    </nav>
                </S.Wrapper>
            </div>
        </header>
    )                                                                        
}

export default Header;