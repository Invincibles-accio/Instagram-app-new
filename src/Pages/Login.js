import React,{useState} from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebaseApp from '../firebase';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
      
    function loginUser(){
        signInWithEmailAndPassword (auth, email, password)
        .then(
            user => console.log("Sign successful",user)
        )
        .catch(
            err=> console.log(err)
        )
    }

    function addUserWithGoogle(){
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log("LoginSuccess", user);
        })
        .catch((error) => {
            console.log(error);
        })

    }

    return(
        <div>
              <h1>Login</h1>
              <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              
              />
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                  <br/>
                <button onClick={loginUser}>Login</button>
               
                <button onClick={addUserWithGoogle}> Login With Email</button>
        </div>
    )
}

export default Login;