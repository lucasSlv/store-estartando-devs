import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 80%;
    display: flex;
    justify-content: center;
    margin: 12px auto;
    align-items: center;
    gap: 12px;
    padding: 16px 30px;
`;

export const Input = styled.input`
    width: 300px;
    background-color: #F4F6F8;
    border: none;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    &:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;