import React, { useState } from "react";
import MenuLateral from "../components/MenuLateral";
import {
  InputGroup,
  FormControl,
  Button,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Editar = ({ devs, gens, evento, nombz, anioz, devz, genz }) => {
    const [textnomb, settextnomb]= useState(nombz)

    const cambiaNomb = (event)=>{
        settextnomb(event.target.value)
    }

    const [textAnio, settextAnio] = useState(anioz)

    const cambiAnio = (event)=>{
        settextAnio(event.target.value)
    }

  return (
    <>
      <MenuLateral/>
      <InputGroup className="mb-3">
        <div>
            <h3><Link to={'/Lista'}>⬅</Link></h3>
            <h1>Editar</h1>
          <FormControl
            id="nombreing"
            placeholder="Ingresa el nombre del videojuego"
            value={textnomb}
            onChange={cambiaNomb}
          />
          <br />
          <FormControl id="anio" placeholder="Año en que fue Lanzado" value={textAnio} onChange={cambiAnio}/>
          <br />
          <Form.Select id="dev">
            <option value={devz}>{devz}</option>
            {devs.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <br />
          <Form.Select id="gen">
            <option value={genz}>{genz}</option>
            {gens.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </Form.Select>
          <br />
          <Button variant="dark" onClick={evento}>
            <Link to={'/Lista'}>Actualizar</Link>
          </Button>
        </div>
      </InputGroup>
    </>
  );
};

export default Editar;
