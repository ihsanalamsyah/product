'use client'

import Image from "next/image";

export default function ImageProduct(imageProduct: ImageProduct){

    return (          
        <div className="w-1/2 h-screen bg-gradient-to-b from-violet-200 to-violet-900 flex">
            <figure className="bg-gray-200 w-3/4 mx-auto my-44 flex">
                <Image
                    src={imageProduct.image_url}
                    alt={imageProduct.image_alt}
                    width={300}
                    height={200}
                    className="m-auto"></Image>
            </figure>
        </div>      
    )
}