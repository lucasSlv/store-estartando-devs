import { Color, ColorsProduct, Container, InfoWrapper, ProductDescription, TitleColor, ValueProduct, ImageProduct, ContainerImage, Line } from "./styles"
import { Avaliacao } from "../Avaliacao"
import { Contador } from "../ContadorCarrinho"
import { BotaoCarrinho } from "../BotaoCarrinho"

export const ProductDetails = ({productName, productPrice, productColors, productDescription, productImage }) => {
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

            <ValueProduct>R${productPrice}</ValueProduct>

            <Line></Line>

            <TitleColor>
                Cores 
            </TitleColor>

            <ColorsProduct>
                {productColors?.map(color => (
                    <Color key={color} bgColor={color}/>
                ))}
                <Contador />
            </ColorsProduct>

            <BotaoCarrinho />

        </Container>
    )
}