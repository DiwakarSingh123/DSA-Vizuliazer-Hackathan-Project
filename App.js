import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, Link} from "react-router";
import Header from "./Component/Header";
import MainDiv from "./Component/MainDiv";
import DataStructure from "./Component/DataStructure";
import Arrays from "./Component/Arrays";
import Stack from "./Component/Stack";
import Queue from "./Component/Queue";
import LinkedList from "./Component/LinkedList";
import AlgorithmMain from "./Component/AlgorithmMain";

import Sorting from "./Component/Sorting";



import Tree from "./Component/Tree";
import Searching from "./Component/Searching";

import Footer from "./Component/Footer";
function App(){
    return(
      <>
       <div className="app">
       

        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<MainDiv />}></Route>
            <Route path="/DataStructure" element={<DataStructure/>}></Route>
            <Route path="/Arrays" element={<Arrays />}></Route>
            <Route path="/Stack" element={<Stack />}></Route>
            <Route path="/Queue" element={<Queue />}></Route>
            <Route path="/LinkedList" element={<LinkedList />}></Route>
            <Route path="/AlgorithmMain" element={<AlgorithmMain />}></Route>
           
            
            <Route path="/Searching" element={<Searching />}></Route>
           
            <Route path="/Sorting" element={<Sorting />}></Route>
   
            <Route path="/Tree" element={<Tree />}></Route>
         
           
        </Routes>
       </BrowserRouter>
       </div>
      <Footer />
      </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)