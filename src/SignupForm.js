import React, { useState } from 'react'

export const SignupForm = () => {
   const [email, setEmail] = useState()
   const [username, setUsername] = useState()
   const [password1, setPassword1] = useState()
   const [password2, setPassword2] = useState()
   const [error, setError] = useState("")
   const [success, setSuccess] = useState("")


   function handleSubmit(e){
     e.preventDefault()
     if(username.trim()==""){
        setError("UserName is required*");
        return;
     }
     if(email.trim()==""){
        setError("Email is required*");
        return;
     }
     if(password1.trim() == ""){
        setError("Password is required");
        return;
     }
     if(password2.trim() == ""){
        setError("Password is required");
        return;
     }
     if(password1 != password2){
        setError("Password does not match");
        return;
     }
     if(error==""){
        setSuccess("Succesfully SignedUp");
        return;
     }
   }


  return (
    <div>
         <form onSubmit={handleSubmit}>

            <div>
                <label>Name: </label>
                <input type="text" placeholder='user-name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>

            <div>
                 <label>Email: </label>
                 <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
           
            <div>
                <label>Password: </label>
               <input type="password" placeholder='password' value={password1} onChange={(e)=>setPassword1(e.target.value)}/>
            </div>
            
            <div>
                <label>Confirm Password: </label>
               <input type="password" placeholder='password' value={password2} onChange={(e)=>setPassword2(e.target.value)} />
            </div>

             <button type='submit'>Sign Up</button>
         </form>

         <div id='error'>{error}</div>
         <div id='success'>{success}</div>
    </div>
  )
}
