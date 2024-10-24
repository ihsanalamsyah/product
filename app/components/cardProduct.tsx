'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function CardProduct(cardProduct: CardProduct){
    const [products] = useState<Product[]>(cardProduct.products);
    const router = useRouter();

    function handleOpen(product_id: number){
        return router.push(`product/${product_id}`); 
    }
   
    return (
        <>
          <div className="grid gap-x-8 gap-y-4 grid-cols-4">       
                {products.map((product)=>{
                    const price: number = product.price!;
                    let stringPrice:string = price.toString().replace(/\./g, '');
                    stringPrice = "Rp. "+ stringPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
                    
                    return(<div className="card static bg-base-100 w-80 shadow-xl mx-5 my-2" key={product.product_id!}>
                            <figure className="h-44 w-full bg-gray-200">
                                <img
                                    src={product.image_url!}
                                    alt={`Image Product ${product.product_id}`}/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>Price: {stringPrice}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-success mx-1 w-max" onClick={()=> handleOpen(product.product_id!)}>Open Product</button>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
            </div>
        </>    
    )
}