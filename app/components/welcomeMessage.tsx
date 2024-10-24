'use client'

export default function welcomeMessage(welcomeMessage: WelcomeMessage){
    return (
        <>
            <p><b>Welcome To Product With Next 13 {welcomeMessage.name}!</b></p>
        </>               
    )
}