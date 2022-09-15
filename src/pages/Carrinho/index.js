import { Link } from "react-router-dom";
import * as S from './styles';
import BackIcon from '../../assets/header-images/back-icon.svg';
import LupaIcon from '../../assets/header-images/lupa-icon.svg'

function Carrinho() {
    
    return (

        <S.Wrapper>
            <Link to="/" > <img src={BackIcon} /> </Link>
            <h3> Carrinho </h3>
            <Link to="/" > <img src={LupaIcon} /> </Link>
        </S.Wrapper>
    )
}

export default Carrinho;