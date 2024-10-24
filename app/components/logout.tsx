'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from '@/utils/cookies';

export default function Logout(logout: Logout){
    const router = useRouter();
  
    async function handleLogout(){
        logout.handleChangeLogout
        deleteCookie("username");
        return router.push("/");
    }
    return (
        <>
        <input type="checkbox" checked={logout.modalLogout} onChange={logout.handleChangeLogout} className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Are you sure to logout?</h3>                            
                <div className="modal-action">
                    <button type="button" className="btn" onClick={logout.handleChangeLogout}>
                        Close
                    </button>
                    <button type="button" onClick={handleLogout} className="btn btn-primary">
                        Yes
                    </button>                                                       
                </div>
            </div>
        </div>
        </>
    )
}