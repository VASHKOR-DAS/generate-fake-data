import './App.css';
import { useEffect, useState } from 'react';

// import data from "../src/components/Generate from JSON/generated.json";

// variable er name hobe aikhane
import { JSFormate } from "./components/Generate from JSON/fakeData.js";


function App() {
  const [clubs, setClubs] = useState([])
  useEffect(() => { setClubs(JSFormate); }, [])
  // console.log(clubs);

  return (
    <div>
      <ul>
        {
          clubs.map(club =>
            <li key={club.index}>

              <h4>{club.name}</h4>
              <p>{club.phone}</p>

            </li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
