import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 24px 30px;
`

export const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    background-color: #D9D9D9;
    border-radius: 16px;
`

export const ImageProduct = styled.img`
    height: 250px;
    width: 250px;
`

export const ColorsProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 194px;
`
export const TitleColor = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    margin-top: 25px;
`

export const Color = styled.span`
    width: 32px;
    height: 32px;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${props => props.bgColor};
`

export const InfoWrapper = styled.div`

    & > p {
        font-weight: 400;
        font-size: 24px;
        line-height: 120%;
    }

`

export const ProductDescription = styled.div`
    margin-top: 10px;
    color: #939393;
    font-size: 16px;
    text-transform: capitalize;

    & > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: #828282;
    }
`

export const ValueProduct = styled.span`
    font-size: 24px;
    line-height: 120%;
    color: #222222;
`

export const Line = styled.div`
    margin-top: 25px;
    background-color: #D9D9D9;
    height: 4px;
    width: 300px;
`