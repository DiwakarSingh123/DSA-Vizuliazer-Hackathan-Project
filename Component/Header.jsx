// import { useState } from "react";
import "../Component/Header.css";
import Algorithm from "./Algorithm";
import Button from "./Button";
import { BrowserRouter, Routes, Route, Link} from "react-router";
import MainDiv from "./MainDiv";
// import { useState } from "react";


const Header = () => {

  // const [show,setShow]=useState(false);
  const firstAlgoName=["Data Structure","Arrays","Stack","Queue","Linked List","Searching","Sorting","Tree","Algoriths"];
    // const secondAlgoName=["Algorithms", "Backtracking", "Brute Force","Divide and conquer","Dynamic Programing","Greedy","Recursion","Searching","Sorting"]
  return (
    <header>
       <div className="header">
       <Link to="/" style={{textDecoration:"none", color:"black"}}><h2>DSA Visualization</h2></Link>
        <div className="algo-div">
        <Algorithm firstAlgoName={firstAlgoName}/>
        {/* <Algorithms secondAlgoName={secondAlgoName}/> */}
        </div>
        <input type="text" placeholder="Search..." className="input"/>
        <i class="ri-menu-line menu"></i>
       </div>
       <Button />
    </header>
  )
}

export default Header