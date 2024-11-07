import React, { useState } from "react";
import axios from "axios";
import logo from "./New folder/logo.png"
import { Link } from "react-router-dom";


function Signup(){

    const [error,seterror]=useState("")

    const handleSignup=(e)=>{
        e.preventDefault()
    
        const user=e.target.elements[0].value;
        const email=e.target.elements[1].value;
        const pass=e.target.elements[2].value;

        axios.post("/signup/",{
            'username':user,
            'email':email,
            'password':pass
        },{withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })
        
      }
    return(
        <div className="w-screen h-svh flex flex-col">
      <img src={logo} className="h-10 mx-auto my-5 w-fit object-contain"/>
      <div className="box-border px-5 py-4 m-auto flex align-middle flex-col w-svw h-fit">

        <h1 className="uppercase my-9 text-center text-red-600 text-2xl font-bold">Signup</h1>
        <form onSubmit={handleSignup} className="flex w-full flex-col gap-4">
          <input type="text" placeholder="username" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
          <input type="email" placeholder="email@example.com" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
          <input type="password" placeholder="password" className="outline-red-700 bg-gray-100 px-3 py-2 rounded"/>
          <button type="submit" className="text-white text-lg bg-red-700 py-2 rounded">Submit</button>
        </form>
        <p>{error}</p>
    <p className="text-sm text-center my-4">Already have an account? <Link to="/login"><b className="text-red-600">Login</b></Link>
    </p>
      </div>
    </div>
    )
}export default Signup;