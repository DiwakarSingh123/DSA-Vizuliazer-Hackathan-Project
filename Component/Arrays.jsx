import "../Component/Arrays.css";
import { BrowserRouter, Routes, Route, Link} from "react-router";
import ArrayFunction from "./ArrayFunction";
import { useState } from "react";
import useArrayOperations from "./useArrayOperations";


const Arrays = () => {

  const[check,setCheck]=useState(false);

  // State for showing the next section after submitting
  const [show, setShow] = useState(false);

  // Buttons creating for insertion,deletion,updation
  const [creatButton,setCreatButton]=useState([]);

   // Lifted State for Array Values
   const [arrayValues, setArrayValues] = useState([]);
   console.log(arrayValues);

  // for changing the color if anythinks are updated................
   const [changeColor, setChangeColor] = useState(null);
    
  const {
    array,
    setArray,
    insertAtFirst,
    insertAtEnd,
    insertAtIndex,
    deleteAtFirst,
    deleteAtEnd,
    deleteAtIndex,
    updateAtFirst,
    updateAtEnd,
    updateAtIndex,
  } = useArrayOperations(arrayValues, setArrayValues);
   

  return (
   <>
    <div className="array-container">
      
      <h1 style={{textAlign:"center"}}>Arrays</h1>
      <div className="operation">
        <h2>One Dimension array operations</h2>
        <div className="oper-btn">
        <button onClick={()=>setCheck(!check)}>Create a new array</button>
        { show ? 
          <div>
          <button onClick={()=>setCreatButton(["Insert At First","Insert At End","Insert At Index"])}>Insert</button>
          <button onClick={()=>setCreatButton(["Delete At First","Delete At End","Delete At Index"])}>Delete</button>
          <button onClick={()=>setCreatButton(["Update At First","Update At End","Update At Index"])}>Update</button>
          </div>
          :null
        }
        {
          creatButton.length>0 ? 
          <div className="creat-btn">
           {creatButton.map((btn) => (
                <button
                  key={btn}
                  onClick={() => {
                    if (btn === "Insert At First"){
                      insertAtFirst(prompt("Interst value at first Index"));
                      setChangeColor(0);
                    }
                    if (btn === "Insert At End"){
                      insertAtEnd(prompt("Interst value at Last Index"));
                      setChangeColor(arrayValues.length)
                    }
                    if (btn === "Insert At Index") {
                      let index = parseInt(prompt("Enter the index:"));
                      let value = parseInt(prompt("Enter the value:"));
                      insertAtIndex(index, value);
                      setChangeColor(index);
                    }
                    if (btn === "Delete At First") deleteAtFirst();
                    if (btn === "Delete At End") deleteAtEnd();
                    if (btn === "Delete At Index") deleteAtIndex(prompt("Interst the Index"));
                    if (btn === "Update At First"){
                      updateAtFirst(prompt("Enter the element"));
                      setChangeColor(0)
                    }
                    if (btn === "Update At End"){
                      updateAtEnd(prompt("Enter the element"));
                      setChangeColor(arrayValues.length-1)
                    }
                    if (btn === "Update At Index") {
                      let index = parseInt(prompt("Enter the index to update:"));
                      let value = parseInt(prompt("Enter the new value:"));
                      updateAtIndex(index, value);
                      setChangeColor(index);
                    }
                  }}
                >
                  {btn}
                </button>
              ))}
          </div>
          :null
        }
        {
          show ?
          <div className="row-array">
            <div className="ind">
              <p>Index</p>
              <div className="hover">
              {arrayValues.map((_, ind) => <p key={ind} className={changeColor === ind ? "highlight" : ""}>{ind}</p>)}
              </div>
            </div>
            <div className="ind">
              <p>Data</p>
              <div className="hover">
              {arrayValues.map((num, ind) => <p key={ind} className={changeColor === ind ? "highlight" : ""}>{num}</p>)}
              </div>
            </div>
          </div>
          :null
        }
        </div>
      </div>
      {check ? <ArrayFunction check={check} setCheck={setCheck}  setShow={setShow} arrayValues={arrayValues} setArrayValues={setArrayValues}/> :""}
    </div>

    <div className="array-text">
     <h2>Example:-</h2>
     <div className="img-div">
     <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/ds-image/array.jpg" alt="" />
     </div>
     <div>
     <h2>Properties</h2>
     <ul>
      <li>It is a derived data type, compose of a collection of various primitive data types</li>
      <li>Elements of an array are stored in contiguous blocks in prime memory</li>
      <li>The name of the array stored the base address of the array. It acts as a pointer to the memory block where the first element has been stored</li>
     </ul>
     </div>

     <div>
     <h2>Operations</h2>
     <ul>
      <li>Insertion</li>
      <li>Deletion</li>
      <li>Updation</li>
      <li>Searching</li>
      <li>Searching</li>
     </ul>
     </div>
     
     <div>
     <h2>Algorithms</h2>
     <ul>
     <li>Flody cycle detection</li>
     <li>KMPC</li>
     <li>Quick select</li>
     <li>Boyer-more majority vote</li>
     </ul>
     </div>

    <div>
    <h2>Applications</h2>
     <ul>
      <li>Arrays in data structures help to solve some high level problems like the Longest consecutve subsequence program or some easy task like arranging the same things in ascending order</li>
     </ul>
    </div>
    </div>
   </>
   
  )
}

export default Arrays