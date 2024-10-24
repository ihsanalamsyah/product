'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Logout  from "@/app/components/logout";


export default function Navbar(navbar: Navbar){
    const [modalLogout, setModalLogout] = useState(false);
    const router = useRouter();

    function handleHomePage(){
        return router.push("/product");
    }
    function handleChangeLogout(){
        setModalLogout(!modalLogout);
    }
    return (
        <>
        <div className="navbar bg-black fixed top-0 left-0 w-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li className="text-black"><a onClick={handleHomePage}><b>Home</b></a></li>  
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-white" onClick={handleHomePage}>Produku.id</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li className="text-white"><a onClick={handleHomePage}><b>Home</b></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full border-white">
                            {navbar.user.image_url != "" ? 
                            <Image
                                alt="Image User"
                                src={navbar.user.image_url!} 
                                width={100}
                                height={100}/>
                                : 
                            <Image
                                alt="Image User"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                                width={100}
                                height={100}/>}
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li> <a onClick={handleChangeLogout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <Logout modalLogout={modalLogout} handleChangeLogout={handleChangeLogout}/>
        </>   
    )
}