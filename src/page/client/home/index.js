import React from "react";
import styled from "styled-components";

import LinkButton from "../../../components/LInkButton";

const HomePage = () => {
  return (
    <Wrapper>
      <Container>
        <LinkButton href="/page1">Go to Page1</LinkButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: white;
`;
const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 50px;
`;
export default HomePage;
