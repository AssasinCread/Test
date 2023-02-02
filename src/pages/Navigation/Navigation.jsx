import React from "react"
import { Link, Router } from "react-router-dom"
import { NavStyle, NavLink, Container } from "./style"
class Navigation extends React.Component{
    render(){
        return (
            <Container>
             <NavStyle>
            <NavLink to="/" >
                Home
            </NavLink>
            <NavLink to="/about">
                Single
            </NavLink>
        </NavStyle>
        </Container>
        )
        
       
        
    }
}
export default Navigation

