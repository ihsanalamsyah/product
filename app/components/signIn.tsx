'use client'

import { useState, SyntheticEvent, ChangeEvent } from "react";
import { useRouter } from 'next/navigation';
import AlertFailed from '@/app/components/alertFailed';
import AlertSuccess from '@/app/components/alertSuccess';
import { setCookie } from '@/utils/cookies';

const route = process.env.NEXT_PUBLIC_ROUTE;

export default function SignIn(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertStatus, setAlertStatus] = useState("");
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const router = useRouter();

    function resetForm(){
        setUsername("");
        setPassword("");
    }
   
    async function handleSubmit(e: SyntheticEvent){
        e.preventDefault();
        setIsMutating(true);
        const response = await fetch(`${route}/signIn`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const content = await response.json();
        if(content.status == "OK"){
            setIsMutating(false);
            setAlertMessage(content.msg);
            setIsAlertVisible(true);
            setAlertStatus(content.status);
            resetForm();
            setCookie("username", content.data.username, 7);
            return router.push("/product");
        }
        else{            
            resetForm();
            setIsMutating(false);
            setAlertMessage(content.msg);
            setIsAlertVisible(true);
            setAlertStatus(content.status);
            return router.push("/");
        }
        
    }
    function handleCloseAlert(){
        setIsAlertVisible(false);
    }
    function handleShowPassword(e: ChangeEvent<HTMLInputElement>){
        const checkbox = e.target.checked;
        if(checkbox){
            setIsShowPassword(true);
        }else{
            setIsShowPassword(false);
        }
    }
    return (
        <>
            <h1 className="lg:text-4xl text-xl text-white">Sign-In.</h1>
            <h1 className="text-white my-1 lg:text-base text-xs">Please Enter Your Username and Password Correctly :</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control my-2">                      
                    <input 
                        type="text" 
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        className="input lg:input-md input-sm w-full max-w-lg"  
                        placeholder="Username"/>
                </div>                      
                <div className="form-control my-2">
                {isShowPassword ? (
                    <input
                        type="text" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="input lg:input-md input-sm w-full max-w-lg" 
                        placeholder="Password" />          
                    ) : (
                    <input
                        type="password" 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="input lg:input-md input-sm w-full max-w-lg" 
                        placeholder="Password" />
                    )}
                </div>
                <div className="flex justify-between my-2">
                    <div>
                        {!isMutating ? (
                        <button type="submit" className="btn btn-success lg:btn-sm btn-xs lg:px-6 lg:pb-6 lg:pt-2 text-white">
                            Continue
                        </button>
                        ) : (
                        <button type="button" className="btn loading lg:btn-sm btn-xs lg:px-6 lg:pb-6 lg:pt-2 text-white">
                            Continue...
                        </button>
                        )}       
                    </div>
                    <div className="flex justify-end items-center">
                        <div>
                            <label className="label cursor-pointer lg:px-1 lg:py-1 px-1 py-0">                
                                <input type="checkbox" className="checkbox mx-1 lg:checkbox-sm checkbox-xs show-password-signin border-white [--chkbg:white] [--chkfg:green]" onChange={handleShowPassword}/>
                                <p className="mx-1 text-white lg:text-base text-xs">Show Password</p>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
            {alertStatus == "Failed" ? (
                <AlertFailed message={alertMessage} visible={isAlertVisible} onClose={handleCloseAlert}/>
            ): (
                <AlertSuccess message={alertMessage} visible={isAlertVisible} onClose={handleCloseAlert}/>
            )}
        </>
    )
}