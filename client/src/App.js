import React from "react";
import "./App.css";
import { Container } from "reactstrap";
import Grid from "./components/grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <code>Music Store (Demo)</code>
      </header>
      <Container fluid>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
