import React from "react";
import styled from "styled-components";

const LinkButton = (props) => {
    return (
        <NavbarItem href={props.href}>
            {props.children}
        </NavbarItem>
    );
};

const NavbarItem = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export default LinkButton;