import { initializeApp } from "@firebase/app";
import { getDatabase } from "@firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBWukcWRaqW5Fcqk_ea9vha9lrHW4FUT6I",
  authDomain: "phanomsarakham-next.firebaseapp.com",
  databaseURL: "https://phanomsarakham-next-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "phanomsarakham-next",
  storageBucket: "phanomsarakham-next.appspot.com",
  messagingSenderId: "944804210628",
  appId: "1:944804210628:web:8b2eb1e61e42a934f06691",
  measurementId: "G-77PY1DMTTY"
};

const app = initializeApp(firebaseConfig);
const databaseRef = getDatabase(app)

export { databaseRef };