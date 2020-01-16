import React from "react";
import "./App.css";
import CardContainer from './components/CardContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
background: black;
`
function App() {
  return (
    <Wrapper>
      <div className="App">
        <CardContainer/>
      </div>
    </Wrapper>
  );
}

export default App;
  