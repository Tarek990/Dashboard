"use client"
import { useState } from "react"

export default function Signup(){
  const [password,setpassword]=useState("")
  const [user,setuser]=useState("")
  const [email,setemail]=useState("")
  const login=()=>{
      if( localStorage.getItem("password").toLowerCase()===password.trim().toLowerCase() && 
          localStorage.getItem("Name").toLowerCase()===user.trim().toLowerCase() &&
          localStorage.getItem("email").toLowerCase()===email.trim().toLowerCase()
    ){
          setTimeout(() => {
            window.location.href="/"
          }, 700);
      }else{
        alert("write the correct data")
      }
  }
    return(
        <div className="signup-page login-page">
            <div className="div2-content">
            <div className="img-div3">

            </div>
            
            <div className="form form2">
              <h2>log in</h2>
              <div>
                <input type="text" placeholder="User Name" onChange={(e)=>setuser(e.target.value)}/>
              </div>
              <div>
                <input type="email" placeholder="Email Address" onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
              </div>
              <div>
                <button className="btn-form" onClick={login}>Login</button>
              </div>
              <p>don't have account?<a href="/sign-up"> sign up</a></p>
            </div>
          </div>
          
          </div>

    )
}