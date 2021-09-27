import React from "react";
import Card from "../card";

export default function Body() {
    const datos = [
        {
            url: "https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17335_1280.jpg",
            name: "name",
            description: "Lobcaecati eius! Hic repellendus animi harum, voluptatibus asperiores nobis, sapiente laudantium minima possimus vero explicabo quaerat reprehenderit reiciendis.",

        },
        {
            url: "https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17335_1280.jpg",
            name: "name",
            description: "Lobcaecati eius! Hic repellendus animi harum, voluptatibus asperiores nobis, sapiente laudantium minima possimus vero explicabo quaerat reprehenderit reiciendis.",

        },
        {
            url: "https://cdn.pixabay.com/photo/2012/02/27/15/35/lion-17335_1280.jpg",
            name: "name",
            description: "Lobcaecati eius! Hic repellendus animi harum, voluptatibus asperiores nobis, sapiente laudantium minima possimus vero explicabo quaerat reprehenderit reiciendis.",

        }
    ]
    return (
        <div className="flex justify-center mx-5">
            <div className="flex flex-wrap">
              <div className="m-5 w-2/5">
                <h2 className="text-3xl font-semibold">Titulo de body</h2>
                <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, vitae nostrum? Omnis temporibus ut molestias laborum corporis id, magnam vitae, accusamus magni excepturi saepe laboriosam harum ducimus placeat obcaecati eius, voluptatum ea reprehenderit commodi! Hic repellendus animi harum, voluptatibus asperiores nobis, sapiente laudantium minima possimus vero explicabo quaerat reprehenderit reiciendis.</p>
              </div>
            <div className="m-5 ml-32 w-2/5">
                <h2 className="text-3xl font-semibold">Michito</h2>
                <li>Opción 1</li>
                <li>Opción 2</li>
                <li>Opción 3</li>
                <li>Opción 4</li>
                <li>Opción 5</li>
            </div>
            <div className="flex flex-row">
                <Card datos={datos}/>
              </div>
            </div>
        </div>
    )
}