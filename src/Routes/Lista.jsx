import React from "react";
import MenuLateral from "../components/MenuLateral";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Lista = ({ obj, fav, erase, edit }) => {
  return (
    <>
    <MenuLateral/>
    <h1>Lista de Videojuegos</h1>
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>videojuego</th>
                <th>Año de Lanzamiento</th>
                <th>Desarrolladora</th>
                <th>Genero</th>
                <th>Favortio</th>
            </tr>
        </thead>
        <tbody>
                {obj.map((item)=>(
                    <tr>
                    <th scope="ROW">{item.nombre}</th>
                    <td>{item.anio}</td>
                    <td>{item.Desarrolladora}</td>
                    <td>{item.genero}</td>
                    <td><label onClick={()=>fav(item.id)}>{item.Favoritos ? '🧡' : '🤍'}</label></td>
                    <td><label onClick={() => erase(item.id)}>🆑</label></td>
                    <td><Link onClick={()=> edit(item.id)} to={'/Edit'}>✒</Link></td>
                    </tr>
                ))}
        </tbody>
    </Table>
    </>
  );
};

export default Lista;
