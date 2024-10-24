import { NextResponse, NextRequest } from "next/server";
import { supabase } from '@/utils/supabase';

export async function POST() {
    try {
        let result:Product[] = [];
        const products = await supabase
            .from('products')
            .select()
        if(products.error != null){
            return NextResponse.json({status: "Failed", msg: "Error fetch products", data: result, error_message: products.error}, {status: 404});
        }
        if(products.data?.length <= 0){
            return NextResponse.json({status: "Failed", msg: "Products noy found", data: result}, {status: 404});
        }
        for(let i=0; i < products.data?.length; i++){
            result.push({
                product_id : products.data[i].product_id,
                title : products.data[i].title,
                price : products.data[i].price,
                image_url : products.data[i].image_url,
                row_status : products.data[i].row_status,
            })
        }
        return NextResponse.json({status: "OK", msg: "Get All Products", data: result}, {status: 200});
    }
    catch(error) {
        return NextResponse.json({status: "Failed", msg: "Failed GET User", error_message: error}, {status: 400});
    }
}

