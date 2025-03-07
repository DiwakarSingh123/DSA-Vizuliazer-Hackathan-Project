import { useState } from "react";
import "../Component/Stack.css";

const Stack = () => {
  const [stack,setStack]=useState([]);

  //push operation............
  function Push(element){
    setStack([...stack,element]);
  }

  //Pop operation..................
  function Pop(){
    setStack(stack.slice(0,-1));
  }

  //clear all ..........
  function ClearAll(){
    setStack([]);
  }

  return (
   <>
    <div className="Stack-container">
      <h2 style={{textAlign:"center"}}>STACK</h2>
      <h3 style={{textAlign:"center"}}>Stack Operation</h3>
      <div className="Operation">
        
        <div className="operation-btn">
          <button onClick={()=>Push(prompt("Enter the value"))}>PUSH</button>
          <button onClick={()=>Pop()}>POP</button>
          <button onClick={()=>ClearAll()}>CLEAR ALL</button>
        </div>
      </div>

      <div className="showing-result-hero">
         
          <div className="arrow-head-wala">
            <p>Head</p>
            <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/arrow.png" alt="" />
          </div>
          
          
        
        
          <div>
          {
            stack.length<=0 ?
            <div className="res-box">
            <div>Empty</div>
            </div>
            :<div className="box">
                {stack.map((val)=> <div>{val}</div>)}
            </div>
          }
          </div>
      </div>
    </div>
     {/* Here hard code of stack */}
     <div className="hard-container">
     <div className="example">
     <h1>Stack</h1>
     <p>The stack data structure is a linear data structure that accompanies a principle known as LIFO(Last In First Out).</p>
     <h4>Example</h4>
     </div>
     <div className="stack-img">
      <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/ds-image/stack.jpg" alt="" />
     </div>

     <div className="list">
     <h2>Properties</h2>
     <ul>
      <li>The insertion and deletion happens at the same end i.e from the top of the stack</li>
      <li>Stack is implemented through Array or Linked list</li>
      <li>If the allocated space for stack is full, and any attempt to add more elements will lead to stack overflow. The opposite, any attempt to extract elements on an empty stack leads to stack underflow</li>
     </ul>
     </div>

     <div className="list">
     <h2>Operation</h2>
     <ul>
      <li>Push</li>
      <li>Pop</li>
      <li>Peek</li>
     </ul>
     </div>

     <div className="list">
     <h2>Applications</h2>
     <ul>
      <li>Expression evaluation and conversion</li>
      <li>Function call (call stack function)</li>
      <li>Parentheses checking</li>
      <li>Memory management</li>
      <li>Syntax parsing</li>
      <li>Find next greater elements (frequency)(left -right)</li>
      
     </ul>
     </div>

     <div className="list">
     <h2>Advantage</h2>
     <ul>
      <li><b>Efficient data management:</b> Stack helps you manage the data in a LIFO</li>
      <li><b>Efficient management of functions:</b> When a function is called , the local variables are stored in stack, and it is automatically destroyed once returned</li>
      <li>Control over memory</li>
      <li>Control over memory</li>
      <li>Does not allow resizing of variables</li>
      
      
     </ul>
     </div>

     <div className="list">
     <h2>Disadvantage</h2>
     <ul>
      <li>Limited memory size</li>

      <li>Chances of stack overflow</li>
      <li>Random access not possible</li>
      <li>Undesires termination</li>
      
      
     </ul>
     </div>

    </div>
   </>
  )
}

export default Stack

{/* <div className="Arrow-tail">
          {
            stack.length>1 ?
            <div className="Arrow-tail">
            <p>Tail</p>
            <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/arrow.png" alt="" />
            </div>
          :""
            }
          </div> */}