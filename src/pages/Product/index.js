import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetails } from "../../components/ProdutosInfo"
import { getProduct } from "../../services/productService"
import { ProductWrapper } from "./styles"
import  Header  from "../../components/Header"


export const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
        const productPromise = getProduct(id);
        
        productPromise
        .then(result => setProduct(result.data))
        .catch(error => console.error(error))
    }, [id])
       

    return (
        <ProductWrapper>
            <Header />
            <ProductDetails
            productImage={product?.image} 
            productName={product?.name}
            productPrice={product?.price}
            productSizes={product?.sizes}
            productColors={product?.colors}
            productDescription={product?.description}/>
        </ProductWrapper>
    )
}