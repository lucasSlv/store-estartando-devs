import styled from "styled-components";

export const Botao = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    width: 85%;
    height: 56px;
    background: #232323;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;

    & p {
        font-size: 14px;
        color: #FFFFFF;
        text-transform: uppercase;
    }
`