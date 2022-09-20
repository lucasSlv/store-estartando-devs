import Header from "../../components/Header";
import * as S from './styles';
import LupaIcon from '../../assets/header-images/lupa-icon.svg'
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getProduct } from "../../services/productService"
import { ListaProdutos } from "../../components/ListaProdutos"
import { FiltroProdutos } from "../../components/Filtros";

function Home() {

    // const [listProduct, setListProduct] = useState([]);

    // useEffect(() => {
    //     const generateProductPromises = () =>
    //         Array(6)
    //         .fill()
    //         .map((_, index) => 
    //             getProduct(index + 1).then((response) => response.data)
    //         );

    //         const ProductPromises = generateProductPromises();

    //         Promise.all(ProductPromises).then((product) => setListProduct(product));

    // }, []);
    
    return (
        <div>
            <Header />
            <S.Wrapper>
                <img src={LupaIcon} alt="Lupa"/>
                <S.Input placeholder="Procurando por algo em específico?" />
            </S.Wrapper>
            <FiltroProdutos />
            {/* <ul>
                {listProduct.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <Link to={`/produtos/${product.id}`}>Clique aqui</Link>
                    </li>
                ))}
            </ul> */}
            <ListaProdutos/>
        </div>
    )
}

export default Home;