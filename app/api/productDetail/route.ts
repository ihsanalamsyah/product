import { NextResponse, NextRequest } from "next/server";
import { supabase } from '@/utils/supabase';

export async function POST(req: NextRequest) {
    const result:Product = {
        product_id: 0,
        title: "",
        price: 0,
        image_url: "",
        row_status: false
    };
    try {
        const body:Product = await req.json();
        if(body.product_id != null){
            const product = await supabase
                .from('products')
                .select()
                .eq('product_id', body.product_id)
                .eq('row_status', true)
                .limit(1)
            if(product.error != null){
                return NextResponse.json({status: "Failed", msg: "Failed fetch product", error_message: product.error}, {status: 404});
            }
            if(product.data.length <= 0){
                return NextResponse.json({status: "Failed", msg: "Product not exists"}, {status: 404});
            }
            result.product_id = product.data[0].product_id;
            result.title = product.data[0].title;
            result.price = product.data[0].price;
            result.image_url = product.data[0].image_url;
            result.row_status = product.data[0].row_status;
            return NextResponse.json({status: "OK", msg: "Get detail product", data: result}, {status: 200});
        }
    }
    catch(error) {
        return NextResponse.json({status: "Failed", msg: "Failed GET Product Detail", error_message: error}, {status: 400});
    }
}