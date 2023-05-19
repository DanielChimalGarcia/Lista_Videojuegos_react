import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Home from "./Routes/Home";
import Error from "./Routes/Error";
import Lista from "./Routes/Lista";
import Agregar from "./Routes/Agregar";
import { Favorites } from "./Routes/Favorites";
import Editar from "./Routes/Editar";

function App() {
 const [idx, setidx] = useState('Sin datos')
  const [nombx, setnombre] = useState('sindatos')
  const [aniox, setanio] = useState('sindatos')
  const [devx, setdevx] = useState('sindatos')
  const [genx, setgenx] = useState('sindatos')

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
  const generosVideojuegos = [
    "Acción",
    "Aventura",
    "RPG",
    "Estrategia",
    "Disparos",
    "Deportes",
    "Carreras",
    "Plataformas",
    "Puzles",
    "Mundo abierto",
  ];
  const desarrolladorasVideojuegos = [
    "Nintendo",
    "Electronic Arts (EA)",
    "Activision Blizzard",
    "Ubisoft",
    "Rockstar Games",
    "Bethesda Game Studios",
    "Square Enix",
    "Capcom",
    "Naughty Dog",
    "Valve Corporation",
    "CD Projekt Red",
    "Epic Games",
    "Mojang Studios",
    "Bandai Namco Entertainment",
    "Konami",
    "Sony Interactive Entertainment (SIE)",
    "Sega",
    "BioWare",
    "Bungie",
    "Insomniac Games",
  ];

  const Agregarx = () => {
    const nombrex = document.getElementById("nombreing");
    const years = document.getElementById("anio");
    const desrr = document.getElementById("dev");
    const genr = document.getElementById("gen");

    if (
      (nombrex.value === "") |
      (years.value === "") |
      (desrr.value === 0) |
      (genr.value === 0)
    ) {
      alert("LLena todos los campos por favor");
    } else {
      setLista([
        ...videojuegos,
        {
          id: uuidv4(),
          nombre: nombrex.value,
          anio: years.value,
          Desarrolladora: desrr.value,
          genero: genr.value,
          Favoritos: false,
        },
      ]);
      nombrex.value = null;
      years.value = null;
      desrr.value = 0;
      genr.value = 0;
    }
  };

  const AgFavorito = (idx) => {
    const enc = videojuegos.find((item) => item.id === idx);
    var fgv = { Favoritos: enc.Favoritos ? false : true };
    console.log(fgv.Favoritos);

    setLista(
      videojuegos.map((item) => {
        if (item.id === idx) {
          return { ...item, ...fgv };
        } else {
          return item;
        }
      })
    );
  };

  const Eleiminar = (id) => {
    const idEliminar = id;
    const nuevos = videojuegos.filter((item) => item.id !== idEliminar);
    setLista(nuevos);
  };

  const Recup = (id) => {
    let nuevo = videojuegos.filter((item) => item.id === id)
    nuevo.map((item) => {
      setidx(item.id)
      setnombre(item.nombre)
      setanio(item.anio)
      setdevx(item.Desarrolladora)
      setgenx(item.genero)
    })

  }

  const Actualizar = ()=>{
    const nombrex = document.getElementById("nombreing");
    const years = document.getElementById("anio");
    const desrr = document.getElementById("dev");
    const genr = document.getElementById("gen");
    var nuevos = {
      nombre: nombrex.value,
      anio: years.value,
      Desarrolladora: desrr.value,
      genero: genr.value,
    }

    setLista(
      videojuegos.map((item) =>{
        if(item.id === idx){
          return{...item, ...nuevos}
        }else{
          return item
        }
      })
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/Lista",
      element: <Lista obj={videojuegos} fav={AgFavorito} erase={Eleiminar} edit={Recup}/>,
    },
    {
      path: "/Agregar",
      element: (
        <Agregar
          evento={() => Agregarx()}
          devs={desarrolladorasVideojuegos}
          gens={generosVideojuegos}
        />
      ),
    },
    {
      path: "/Favoritos",
      element: <Favorites obj={videojuegos} fav={AgFavorito} />,
    },
    {
      path: "/Edit",
      element: <Editar
          devs={desarrolladorasVideojuegos}
          gens={generosVideojuegos}
          nombz={nombx}
          anioz={aniox}
          devz={devx}
          genz={genx}
          evento={() => Actualizar()}
      />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
