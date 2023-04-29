
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuNw7An_dLzo5UvB8OrQduQWfy2dQCHJQ",
  authDomain: "insta-new-react-app.firebaseapp.com",
  projectId: "insta-new-react-app",
  storageBucket: "insta-new-react-app.appspot.com",
  messagingSenderId: "779168840584",
  appId: "1:779168840584:web:e2b75c7f316466cecf983d",
  databaseURL: "https://insta-new-react-app-default-rtdb.firebaseio.com/",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;