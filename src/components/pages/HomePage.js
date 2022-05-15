import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import LoginPage from './LoginPage'

export default function HomePage() {
    const [logout,setLogout]=useState(false)
    const goBack=()=>{
        setLogout(true)
    }
    if(logout){
        return <LoginPage />
    }
    return (
        <div className="text-center">
            <h1>Hello World</h1>
                <button onClick={goBack} className="primary-button">Log out</button>
        </div>
    )
}
