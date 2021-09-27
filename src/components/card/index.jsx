import React from "react";

export default function index(props) {
    let datos = props.datos;
    return (
        <>
        {
            datos.map((item, index)=>(
        <div className="flex flex-row m-5">
        <div className="m-5 w-2/5">
            <img src={item.url} alt="Gato con sueño" style={{width: "200px"}} />
        </div>
        <div className="w-2/5">
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-md">{item.description}</p>
        </div>
        </ div>

            )
            )}
        </>
    );

    
}