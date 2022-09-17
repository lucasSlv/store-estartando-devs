
import { Container, Lista, Item } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../services/productService"

export function ListaProdutos() {

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const generateProductPromises = () =>
            Array(6)
            .fill()
            .map((_, index) => 
                getProduct(index + 1).then((response) => response.data)
            );

            const ProductPromises = generateProductPromises();

            Promise.all(ProductPromises).then((product) => setListProduct(product));

    }, []);


    return (

       <Container>
            <Lista>
                    {listProduct.map((product) => (
                        <div>
                            <Item key={product.id}>      
                            </Item>
                            <Link to={`/produtos/${product.id}`}><h4>{product.name}</h4></Link>
                            <h5>R${product.price}</h5>
                        </div>

                    ))}
            </Lista>
       </Container>
    )
}