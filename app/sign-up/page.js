"use client"
import { useState } from "react"

export default function Signup(){
  const[fname,setfName]=useState("")
  const[lName,setlName]=useState("")
  const[email,setemail]=useState("")
  const[password,setpassword]=useState("")
  const code1=()=>{
        if(fname===""||lName===""||email===""||password===""){
          alert("please complete the form")
        }else{
          localStorage.setItem("Name",fname)
          localStorage.setItem("LastName",lName)
          localStorage.setItem("email",email)
          localStorage.setItem("password",password)
          alert("confirm")
          
          setTimeout(()=>{

                window.location.href = "/login"
            
          },700)
        }
      
  }
    return(
        <div className="signup-page">
            <div className="div2-content">
            <div className="img-div3">

            </div>
            
            <div className="form">
              <h2>Sign up</h2>
              <div>
                <input type="text" placeholder="First Name" onChange={(e)=>setfName(e.target.value)}/>
                <input type="text" placeholder="Last Name" onChange={(e)=>setlName(e.target.value)}/>
              </div>
              <div>
                <input type="email" placeholder="Email Address" onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
              </div>
              <div>
                <textarea placeholder="Message" className="area"/>
              </div>
              <div>
                <button className="btn-form" onClick={code1}>sign up</button>
              </div>
              <p>do you have account?<a href="/login"> log in</a></p>
            </div>
          </div>
          
          </div>
        
    )
  
}

 