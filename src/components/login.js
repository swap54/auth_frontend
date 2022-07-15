import React from "react";
import { useState } from "react";
import Axios from 'axios';
function Login(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState("");
    const handleLogin = (e) =>{
        Axios({
            method:"post",
            data:{
                username:username,
                password:password,
            },
            withCredentials:true,
            url: "https://authenticationb.herokuapp.com/login"
        }).then((res)=>{
            if(res.data.message){
                alert(res.data.message)
            }
            else{
                setUser(res.data.username);
                
            }
        });
        e.preventDefault();
    }
    return(
        <>  
            {
                user ? <h1>Welcome {user}</h1>:null
            }
            <form>
                <label>Login</label>
                <input type="text" placeholder="Email" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </>
    );
}

export default Login;