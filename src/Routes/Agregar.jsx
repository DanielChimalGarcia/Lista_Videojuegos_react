import React from "react";
import MenuLateral from "../components/MenuLateral";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";

const Agregar = ({ devs, gens, evento }) => {
  return (
    <>
      <MenuLateral />
      <InputGroup className="mb-3">
        <div>
          <h1>Agregar</h1>
          <FormControl
            id="nombreing"
            placeholder="Ingresa el nombre del videojuego"
          />
          <br />
          <FormControl id="anio" placeholder="Año en que fue Lanzado" />
          <br />
          <Form.Select id="dev">
            <option value={0}>--Seleccione--</option>
            {devs.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <br />
          <Form.Select id="gen">
            <option value={0}>--Seleccione--</option>
            {gens.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <br />
          <Button variant="dark" onClick={evento}>
            Agregar
          </Button>
        </div>
      </InputGroup>
    </>
  );
};

export default Agregar;
