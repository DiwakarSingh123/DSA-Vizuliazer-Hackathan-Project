import "../Component/MainDiv.css";
import { BrowserRouter, Routes, Route, Link} from "react-router";
import DataStructure from "./DataStructure";
import AlgorithmMain from "./AlgorithmMain";

const MainDiv = () => {
  return (
   <>
    <div className="main">
      <h1>Data Structures and Algorithms</h1>
      
      <div className="circle-container">
        <div className="first-circle">
          <Link to="/DataStructure" >
          <div><img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/ds-icon.webp" alt="first-circle" /></div>
          </Link>
          <h3>Data Structure</h3>
        </div>
        <div className="first-circle">
          <Link to="/AlgorithmMain">
          <div><img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/algo-icon.webp" alt="second circle" /></div>
          </Link>
          <h3>Algorithm</h3>
        </div>
      </div>
    </div>

    <div className="problemTric">
        <h3 style={{textAlign:"center"}}>DSA Problem Solving Trick</h3>
        <div className="problem-container">
          <a href="https://www.npmjs.com/package/@raj-rathod/dsa-methods" target="blank" className="problem-card">
            <h3>DSA METHODS NPM PAKAGES</h3>
            <p>This package is developed for functionality of data structures and algorithms, s...</p>
          </a>
          <a href="https://dsa-visualization.github.io/shortest-path-finding/" target="blank" className="problem-card">
            <h3>PATH FINDING WITH DIJKSTRA</h3>
            <p>This package is developed for functionality of data structures and algorithms, s...</p>
          </a>
          <a href="https://www.scaler.in/kmp-algorithm/" target="blank" className="problem-card">
            <h3>IN STRING KMP ALGORITHM'S</h3>
            <p>KMP Algorithm efficiently finds pattern occurrences using prefix function preprocessing...</p>
          </a>
        </div>
    </div>
   </>
  )
}

export default MainDiv