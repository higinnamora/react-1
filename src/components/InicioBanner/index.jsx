import React from 'react'
import Boton from '../Boton'

export default function InicioBanner() {
    return (
        <div className="flex flex-row m-5">
            <div className="m-5 w-2/5">
                <img src="https://cdn.pixabay.com/photo/2014/10/23/18/56/tiger-500118_1280.jpg" alt="Gato gris" />
            </div>
            <div className="w-2/5">
                <h2 className="text-3xl font-semibold">Titulo</h2>
                <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vitae nostrum? Omnis temporibus ut molestias laborum corporis id, magnam vitae, accusamus magni excepturi saepe laboriosam harum ducimus placeat obcaecati eius, voluptatum ea reprehenderit commodi! Hic repellendus animi harum, voluptatibus asperiores nobis, sapiente laudantium minima possimus vero explicabo quaerat reprehenderit reiciendis.</p>
                <div className="text-center">
                <Boton />
                <p className="text-sm">descripción corta</p>
                </div>
            </div>
        </ div>
    )
}