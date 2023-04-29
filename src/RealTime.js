import firebaseApp from "./firebase";
import { getDatabase,ref, set } from "firebase/database";


const database = getDatabase(firebaseApp);

const RealTime = () => {

   function addDataToRealTimeDatabase(){
      set(ref(database, "users/1" ),
        {
          id: 1,
          name: "John Doe",
          age: 30,
        }
      )
   }



  return(
    <div>
      <h1>App</h1>
      <button onClick={addDataToRealTimeDatabase}>Add Data</button>
    </div>
  )
}

export default RealTime;