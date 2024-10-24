'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function DetailProduct(detailProduct: Product){
    const [price, setPrice] = useState("");
    const router = useRouter();

    useEffect(() => {
        const price: number = detailProduct.price!;
        let stringPrice:string = price.toString().replace(/\./g, '');
        stringPrice = stringPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setPrice(stringPrice);
    }, [detailProduct.price]);

    function handleBackDashboard(){
        return router.push("/product");
    }
    return(
        <div className='flex flex-col justify-center w-1/2'>
            <div className='lg:m-16'>
              <p className="lg:text-2xl text-md font-medium tracking-wider underline underline-offset-1">Product Detail :</p>
                <p className="lg:text-5xl text-xl font-medium"><b>{detailProduct.title!.toUpperCase()}</b></p>
                <div className="flex justify-between">
                    <p className="lg:text-2xl text-md font-medium">Price : Rp. {price},00</p>
                </div>  
                
                <hr className="border-y-1 border-gray-700"></hr>
                <br></br>
                <div className="collapse collapse-arrow border-base-300 bg-base-200 border lg:hidden grid">
                <input type="checkbox" />
                <div className="collapse-title"><p className="text-md lg:text-xl">View Product Description</p></div>
                    <div className="collapse-content">
                        <p className="text-justify lg:text-base text-sm">
                            Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum mollis cursus sed turpis risus,
                            gravida ornare nisl vulputate! Neque maecenas at enim praesent himenaeos lectus tellus. 
                            Nam non nibh duis mattis lorem. Vel dis sagittis id felis elementum nostra sapien rhoncus 
                            habitant. Curabitur tincidunt facilisis ullamcorper, felis ridiculus scelerisque. 
                            Metus orci ultrices dignissim, feugiat dis amet suspendisse.
                        </p>
                    </div>
                </div>
                <div className="lg:block hidden">
                    <p className="text-justify lg:text-base text-sm">
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum mollis cursus sed turpis risus,
                        gravida ornare nisl vulputate! Neque maecenas at enim praesent himenaeos lectus tellus. 
                        Nam non nibh duis mattis lorem. Vel dis sagittis id felis elementum nostra sapien rhoncus 
                        habitant. Curabitur tincidunt facilisis ullamcorper, felis ridiculus scelerisque. 
                        Metus orci ultrices dignissim, feugiat dis amet suspendisse.
                    </p>
                </div>
              
                <br></br>
                <hr className="border-y-1 border-gray-700 border-dashed"></hr>
                <br></br>
                <div className='flex'>
                    <a onClick={handleBackDashboard}><button className="btn btn-outline lg:btn-sm btn-sm">&lt; Back To Dashboard</button></a>
                </div>
            </div>
        </div>        
    )
}