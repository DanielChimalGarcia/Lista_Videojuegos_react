import React from 'react'
import MenuLateral from '../components/MenuLateral'
import { Table } from "react-bootstrap";

export const Favorites = ({obj }) => {
  return (
    <>
    <MenuLateral/>
    <h1>Lista de Favoritos</h1>
    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>videojuego</th>
                <th>Año de Lanzamiento</th>
                <th>Desarrolladora</th>
                <th>Genero</th>
            </tr>
        </thead>
        <tbody>
                {obj.filter((item)=> item.Favoritos).map((item) =>(
                    <tr>
                    <th scope="ROW">{item.nombre}</th>
                    <td>{item.anio}</td>
                    <td>{item.Desarrolladora}</td>
                    <td>{item.genero}</td>
                    </tr>
                ))}
        </tbody>
    </Table>
    </>
  )
}
