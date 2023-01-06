import React from 'react'
import styled, { keyframes } from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;


const App = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  )
}

export default App