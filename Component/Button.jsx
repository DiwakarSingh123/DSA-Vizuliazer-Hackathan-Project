import "../Component/Button.css";
import { BrowserRouter, Routes, Route, Link} from "react-router";
import MainDiv from "./MainDiv";
import { useState } from "react";
import DataStructure from "./DataStructure";
import Arrays from "./Arrays";
import Stack from "./Stack";
import Queue from "./Queue";
import LinkedList from "./LinkedList";
import AlgorithmMain from "./AlgorithmMain";

import Sorting from "./Sorting";


import Searching from "./Searching"

import Tree from "./Tree";

const Button = () => {

  //for showing the insert, delete, update button..........
  const [show,setShowButton]=useState(false);
  console.log(show);
  
  return (
    <div className="btn-div">
      <nav>
      <Link to="/"></Link>
      <Link to="/DataStructure" ><button>Data Stucture</button></Link>
      <Link to="/Arrays"><button onClick={()=>setShowButton(!show)}>Arrays</button></Link>
      <Link to="/Stack"><button>Stack</button></Link>
      <Link to="/Queue"><button>Queue</button></Link>
      <Link to="/LinkedList"><button>LinkedList</button></Link>
      
    
      <Link to="/Searching"><button>Searching</button></Link>
     
      <Link to="/Sorting"><button>Sorting</button></Link>
      
     
     
      <Link to="/Tree"><button>Tree</button></Link>
      <Link to="/AlgorithmMain"><button>Algorithms</button></Link>
      </nav>
       
    </div>
  )
}

export default Button