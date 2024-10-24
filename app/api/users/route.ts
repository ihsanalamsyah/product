import { NextResponse, NextRequest } from "next/server";
import { supabase } from '@/utils/supabase';

export async function POST(req: NextRequest) {
    try {
        const body:User = await req.json();
        let result:User= {
            user_id: 0,
            username : "",
            password: "",
            phone: "",
            image_url: ""
        }
        const user = await supabase
            .from('users')
            .select()
            .eq('username', body.username);
        if(user.error != null){
            return NextResponse.json({status: "Failed", msg: "Error fetch user", data: result, error_message: user.error }, {status: 404});
        }
        result.user_id = user.data[0].user_id;
        result.username = user.data[0].username;
        result.phone = user.data[0].phone;
        result.image_url = user.data[0].image_url;
       
        return NextResponse.json({status: "OK", msg: "Get all user", data: result}, {status: 200});
    }
    catch(error) {
        return NextResponse.json({status: "Failed", msg: "Failed GET User", error_message: error}, {status: 400});
    }
}

