import { useEffect, useState } from "react";
import { getProduct } from "../../services/productService"
import { Container, Lista, Item } from "./styles";


export function FiltroProdutos() {

    const [listProduct, setFiltroProduct] = useState([]);

    useEffect(() => {
        const generateProductPromises = () =>
            Array(3)
            .fill()
            .map((_, category) => 
                getProduct(category).then((response) => response.data)
            );

            const ProductPromises = generateProductPromises();

            Promise.all(ProductPromises).then((product) => setFiltroProduct(product));

    }, []);


    return (

       <Container>
            <Lista>
                    {listProduct.map((product) => (
                        <div>
                            <Item key={product.category}>    
                            </Item>
                            <h4>{product.category}</h4> 
                        </div>

                    ))}
            </Lista>
       </Container>
    )
}