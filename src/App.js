import React, {useState, useEffect} from "react";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import {Routes, Route} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import firebaseApp from './firebase';
const auth = getAuth(firebaseApp);


const App = () =>{

  let [userInfo, setUserInfo] = useState(null);

   useEffect(
    ()=>{
      onAuthStateChanged(auth, (user) => {
          if(user){
            console.log(user)
            setUserInfo(user)
          }
          else{
            setUserInfo(null)
          }
      })
    }
   )

   function logoutUser(){
    signOut(auth) 
        .then(
          user => console.log("Logout successful",user)
        )
        .catch(
          err=> console.log(err)
        )
   }

  return(
    <div>
      {
        userInfo?(
              <div> 
                <h1> Welcome {userInfo.displayName}</h1>
                <p> {userInfo.email}</p> 
                <button onClick={logoutUser}>Logout</button>
              </div>
        ):(
          <div>
              <SignUp />
              <Login />
           </div>
        )
      }

       

      {/* <Routes> 
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />

      </Routes> */}
    </div>
  )
}

export default App;