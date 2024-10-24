'use server'

import { cookies } from 'next/headers';
import DetailProduct from '@/app/components/detailProduct';
import ImageProduct from '@/app/components/imageProduct';
import Navbar from "@/app/components/navbar";
import { notFound } from "next/navigation";

const route = process.env.NEXT_PUBLIC_ROUTE;

export default async function ProductDetail({params}: {params: {product_id: number}}){
    const cookieStore = cookies();
    const username = cookieStore.get('username')?.value ?? "";
    const product_id = Number(params.product_id);

    if (product_id <= 0  || isNaN(product_id)) {
        notFound();
    }
    async function getDetailProduct(product_id: number){
        let product: Product = {
            product_id: 0,
            title: "",
            price: 0,
            image_url: "",
            row_status: false
        };
        try {
            const response = await fetch(`${route}/productDetail`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_id: product_id
                })
            });

            const content = await response.json();
            product = content.data;

        } catch (error) {
            console.error('Error fetching data:', error);
        }

        return product;
    }
    async function getUserDetail(username: string){
        let user:User= {
            user_id: 0,
            username : "",
            password: "",
            phone: "",
            image_url: ""
        }
        try {
            const response = await fetch(`${route}/users`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username
                })
            });
            const content = await response.json();

            user = content.data;

        } catch (error) {
            console.error('Error fetching data:', error);
        }

        return user;
    }
    const user:User = await getUserDetail(username!);
    const product:Product = await getDetailProduct(product_id);
    return(
        <>
            <Navbar user={user} />
            <div className='flex justify-around mt-16'>
                <DetailProduct title={product.title!} price={product.price!} product_id={product.product_id!} row_status={product.row_status} image_url={product.image_url}/>
                <ImageProduct image_url={product.image_url!} image_alt={`Image Product ${product.title}`} />
            </div>
        </>
    )
}