/**
 * 상단 헤더
 */
import React, {useState} from 'react';
import * as s from "./../styles/HeaderStyled";
// import { Link } from "react-router-dom";
import {
    DropdownToggle,
    UncontrolledDropdown,
    Navbar,
    Nav,
    NavbarBrand,
    Collapse,
} from "reactstrap";

function Header(props) {

    return (
        <s.outsideStyle>
            <s.header className= "header-global">
                <Navbar
                    color="light"
                    expand="md"
                    light
                >
                <NavbarBrand href="/">
                    <s.logoContainer>
                            <s.logoStyle src='logo.png'></s.logoStyle>
                    </s.logoContainer>  
                </NavbarBrand>
                </Navbar>
            </s.header>
        </s.outsideStyle>
    )
}

export default Header;