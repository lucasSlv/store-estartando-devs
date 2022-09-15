import { Color, ColorsProduct, Container, InfoWrapper, ProductDescription, TitleColor, ValueProduct, ImageProduct, ContainerImage, Line } from "./styles"
import { Avaliacao } from "../Avaliacao"

export const ProductDetails = ({productName, productPrice, productColors, productSizes, productDescription, productImage }) => {
    return (
        <Container>
            <ContainerImage>
                <ImageProduct src={productImage} alt="Imagem do Produto"></ImageProduct>
            </ContainerImage>
            
            <InfoWrapper>
                <p>{productName}</p>
            </InfoWrapper>

            <ProductDescription>
                <p>{productDescription}</p>
            </ProductDescription>

            <Avaliacao />

            {/* <SizeWrapper>
                <p>Escolha seu tamanho</p>
                <SizeOption>
                {productSizes?.map(size => (
                    <div key={size}>{size}</div>
                ))}
                </SizeOption>
            </SizeWrapper> */}

            <ValueProduct>R${productPrice}</ValueProduct>

            <Line></Line>

            <TitleColor>
                Cores 
            </TitleColor>

            <ColorsProduct>
                {productColors?.map(color => (
                    <Color key={color} bgColor={color}/>
                ))}
                <p> Contador </p>
            </ColorsProduct>

        </Container>
    )
}