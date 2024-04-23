import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Container>Footer</Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #eee;
`;
const Container = styled.div`
  margin: auto;
  color: grey;
  font-size: 50px;
`;

export default Footer;