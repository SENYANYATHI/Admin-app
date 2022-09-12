
import React,{useState} from "react";
import '../App.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {auth} from '../confirg/firebase'
import {signInWithEmailAndPassword} from 'firebase/auth';


function SignIn(){

    const [email, setEmail] = useState ('');
    const [Password, setPassword] = useState ('');

    const btn = {
        marginTop:'3px',
         borderradius:"3px solid orange",
         height:"30px",
         width:"100px",
     }
 
     let Navigate= useNavigate ();
 
     const login =(() => {
        signInWithEmailAndPassword(auth,email,Password).then (() => {
             Navigate('/add');

         }).catch ((error) => {
             console.log(error);
         })
 
     });
    return(
        <div>
            
        
            <h1>LOGIN</h1>
                <input text="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                <br></br>
                <br></br>
                <input text="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
                <br></br>
                <br></br>
                
                <span>Forget Password</span>{""}
                <span>
                    <Link to="/forgetpassword">Create Password</Link>
                </span>
                <br></br>
                <br></br>
                <button style={btn} onClick={login}>LogIn</button>

        
        </div>
    );
}

export default SignIn;