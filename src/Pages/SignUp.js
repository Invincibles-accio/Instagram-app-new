import React,{useState} from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import firebaseApp from '../firebase';

const auth = getAuth(firebaseApp);

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
      
    function signUpUser(){
        createUserWithEmailAndPassword (auth, email, password)
        .then(
            user => console.log("Signup successfil",user)
        )
        .catch(
            err=> console.log(err)
        )
    }

    return(
        <div>
              <h1>Join Us</h1>
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

                <button onClick={signUpUser}>Sign Up</button>
        </div>
    )
}

export default SignUp;