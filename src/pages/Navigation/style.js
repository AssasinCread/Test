import styled from 'styled-components'
import { Link, Router } from 'react-router-dom'

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const NavStyle = styled.nav`
    display: flex;
    justify-content: center;
    padding: 10px;
    gap: 15px;
    
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: gray;
    padding: 15px;
    border: 2px solid black;
    border-radius: 0.7rem;
    &:hover{
        color: blue;
        border: 2px solid black
    }
    &:focus{
        color: white;
        background: blue;
        box-shadow: 0 0 15px 0 balck;
        border: 2 px solid black;
    }
    &:active{
        color: #6B7280;
    }
`;

