import { useState } from "react";

export const UseDAtaVideojuegos = () => {
  const [videojuegos, setLista] = useState([
    {
      id: "2023518163051",
      nombre: "Zelda Breath of the Wild",
      anio: "2017",
      Desarrolladora: "Nintendo",
      genero: "Mundo abierto",
      Favoritos: true,
    },
  ]);

  return [videojuegos, setLista]
};
