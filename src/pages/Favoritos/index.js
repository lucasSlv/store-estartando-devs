import { Link } from "react-router-dom";
import * as S from './styles';
import BackIcon from '../../assets/header-images/back-icon.svg';
import LupaIcon from '../../assets/header-images/lupa-icon.svg'

function Favoritos() {

    return (

        <S.Wrapper>
            <Link to="/" > <img src={BackIcon} /> </Link>
            <h3> Minha Lista</h3>
            <Link to="/" > <img src={LupaIcon} /> </Link>
        </S.Wrapper>
    )
}

export default Favoritos;