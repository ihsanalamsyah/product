'use server'

import WelcomeMessage from "@/app/components/welcomeMessage";
import CardProduct from "@/app/components/cardProduct";
import Navbar from "@/app/components/navbar";
import { cookies } from 'next/headers';


const route = process.env.NEXT_PUBLIC_ROUTE;

export default async function Products(){
    const cookieStore = cookies();
    const username = cookieStore.get('username')?.value ?? "";
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
    async function getAllProducts(){
        let products:Product[] = [];  
        try {             
            const response = await fetch(`${route}/products`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            const content = await response.json();
            
            products = content.data;
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    
        return products;
    }
    const user:User = await getUserDetail(username!);
    const products:Product[] = await getAllProducts();
    return (
        <>
        <Navbar user={user} />
        <div className="py-10 px-10 mt-16">
            <div className="flex justify-center my-2">
                <WelcomeMessage name={user!.username!}  />
            </div> 
            <hr></hr>
            <div>
                <CardProduct products={products}/>
            </div>         
        </div> 
        </> 
    ) 
}