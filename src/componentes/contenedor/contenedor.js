import React, { useEffect, useState } from "react";
import Articulos from "./articulos";
import {datosArticulos} from "./info_articulos"

export default function Contenedor() {
    //https://newsapi.org/v2/top-headlines?country=us&apiKey=44fbe7129fdb4963977c2d02a46d5fd5
    const [post, setPost] = useState([]);

    const obtenerDatos = async ()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=44fbe7129fdb4963977c2d02a46d5fd5';
        const respuesta = await fetch(url);
        

        const datos = await respuesta.json();
        console.log(datos.articles);
        return setPost(datos.articles);
    }
    //realizar consultas 
    useEffect(()=>{
        obtenerDatos();
    },[])

    //console.log(datosArticulos)
    return(
        <div className="w3-row-padding">
            {
                post.map((index, art)=>{
                    return <Articulos 
                    key={index}
                    titulo={art.title}
                    fecha={art.publishedAt}
                    descripcion={art.description}
                    imagen={art.urlToImage}

                    />
                })
            }
        </div>
    );
}