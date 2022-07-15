import React from "react";
import { useState } from "react";
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './style.css';
function Register(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleRegister = (e) =>{
        // Axios.post("http://localhost:3001/register",{username:username,password:password}).then((response)=>{
        //     alert(response.data);
        // })
        Axios({
            method:"POST",
            data:{
                username:username,
                password:password,
            },
            withCredentials:true,
            url: "https://authenticationb.herokuapp.com/register"
        }).then((res)=>{
            if(res.data.message){
                alert(res.data.message);
            }
            else{
                alert(res.data);
                navigate('/login');
            }
        });
        e.preventDefault();
    }
    return(
        <>
            <form>
                <label>Register</label>
                <input type="text" placeholder="Email" onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button onClick={handleRegister}>Register</button>
            </form>
        </>
    );
}

export default Register;