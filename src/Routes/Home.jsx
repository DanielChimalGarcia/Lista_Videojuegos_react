import React from "react";
import MenuLateral from "../components/MenuLateral";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <MenuLateral />
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <h1>Daniel Chimal García</h1>
        <h3>Grupo 3801</h3>
      </Container>
    </div>
  );
};

export default Home;
