'use client'

import { useEffect, useState } from 'react';
import AlertFailed from '@/app/components/alertFailed';
import AlertSuccess from '@/app/components/alertSuccess';
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
        <div className='flex flex-col justify-center w-1/2 m-16'>
              
            <p className="text-2xl font-medium tracking-wider underline underline-offset-1">Product Detail :</p>
            <p className="text-5xl font-medium"><b>{detailProduct.title!.toUpperCase()}</b></p>
            <div className="flex justify-between">
                <p className="text-2xl font-medium">Price : Rp. {price},00</p>
            </div>  
             
            <hr className="border-y-1 border-gray-700"></hr>
            <br></br>
            <p className='text-justify'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum mollis cursus sed turpis risus,
                gravida ornare nisl vulputate! Neque maecenas at enim praesent himenaeos lectus tellus. 
                Nam non nibh duis mattis lorem. Vel dis sagittis id felis elementum nostra sapien rhoncus 
                habitant. Curabitur tincidunt facilisis ullamcorper, felis ridiculus scelerisque. 
                Metus orci ultrices dignissim, feugiat dis amet suspendisse.
            </p>
            <br></br>
            <hr className="border-y-1 border-gray-700 border-dashed"></hr>
            <br></br>
            <div className='flex'>
                <a onClick={handleBackDashboard}><button className="btn btn-outline btn-sm">&lt; Back To Dashboard</button></a>
            </div>
        </div>        
    )
}