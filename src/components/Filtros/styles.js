import styled from "styled-components";

export const Container = styled.div`
    margin: 25px 10px;

`
export const Item = styled.ul`
    width: 80px;
    height: 82px;
    background-color: #f2f2f2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
`

export const Lista = styled.div`
    display: flex;
    gap: 22px;

    & h4 {
        margin: 0 11px;
    }
`