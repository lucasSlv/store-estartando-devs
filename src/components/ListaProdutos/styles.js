import styled from "styled-components";

export const Container = styled.div`
    margin: 25px 10px;

`
export const Item = styled.ul`
    width: 156px;
    height: 128px;
    background-color: #f2f2f2;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 16px;
`

export const Lista = styled.div`
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-auto-rows: 1fr; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr 1fr; 
  gap: 10px 27px;
  list-style: none;
`