import { useState } from "react";
import "../Component/LinkedList.css";
import ArrayFunction from "./ArrayFunction";
import useArrayOperations from "./useArrayOperations";
const LinkedList = () => {

  
  // for showing the poped card
  const[check,setCheck]=useState(false);

   // Buttons creating for insertion,deletion,updation
   const [creatButton,setCreatButton]=useState([]);

   // State for showing the next section after submitting
   const [show, setShow] = useState(false);

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
      <h1 style={{textAlign:"center"}}>Linked List</h1>
      <div className="operation">
        <h2>Singly LinkedList operations</h2>
        <div className="oper-btn">
        <button onClick={()=>setCheck(!check)}>Create a new LinkedList</button>
        {check ? <ArrayFunction check={check} setCheck={setCheck} setShow={setShow} arrayValues={arrayValues} setArrayValues={setArrayValues}/> :""}
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
                      updateAtFirst(55);
                      setChangeColor(0)
                    }
                    if (btn === "Update At End"){
                      updateAtEnd(66);
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
        </div>

          <div className="list-result">
              {
                arrayValues.length>0 ?
               arrayValues.map((val,ind)=>{
                return <div className="list-res-text">
                <p className={changeColor === ind ? "highlight" : ""}>{val}</p>
                <p className={changeColor === ind ? "highlight" : ""}>Link</p>
                <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/link-arrow.jpg" alt="" width={40} height={10}/>
                </div>
               })
               :
               <div className="list-result">
                <div className="list-res-text">
                <p>Null</p>
                <p>Link</p>
                </div>
                <div className="hori-arrow">
                  <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/link-arrow.jpg" alt="" />
                  <p style={{border:"none"}}>Null</p>
                </div>
              </div>
              }
              
          </div>
        </div>
    </div>

    {/* Hard code start fron here......... */}
    <div className="hard-container">
     <div className="example">
     <h1>Linked List</h1>
     <p>A linked list is a linear data structure as well as a dynamic data structure.A linked list consists of nodes where each node contains a data field and reference(address) to the next node in the list</p>
     <div className="list">
     <h2>Type of linked lists</h2>
     <ul style={{display:"flex", flexDirection:"column", gap:"1.5rem"}}>
    <li><strong>Single linked list:</strong> A single linked list is the most common type of linked list. Each node has data and an address field that contains a reference to the next node.</li>
    <li><strong>Double linked list:</strong> In the double linked list, there are three fields: the previous pointer (which contains a reference to the previous node), the data field, and the next pointer (which contains a reference to the next node). This allows traversal in both directions.</li>
    <li><strong>Circular linked list:</strong> The circular linked list is extremely similar to the single linked list. The only difference is that the last node is connected with the first node, forming a circular loop.</li>
    </ul>
     </div>

     <h4>Example</h4>
     </div>
     <div className="stack-img">
      <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/ds-image/linked-list.jpg" alt="" />
     </div>

     <div className="list">
     <h2>Properties</h2>
     <ul>
    <li>It can be visualized as a chain of nodes where each node contains a data field and a reference (address) to the next node.</li>
    <li>The first node of the linked list is called the <strong>Head</strong> of the linked list. Through the head, we can perform different operations on the linked list.</li>
    <li>The last node of the linked list is pointing to <strong>NULL</strong>, which indicates that it is the last node (<strong>Tail</strong>).</li>
    <li>Unlike arrays, linked list elements are not stored at contiguous memory locations.</li>
    <li>Linked lists are dynamic in nature.</li>
</ul>
     </div>

     <div className="list">
     <h2>Operation</h2>
     <ul>
    <li>Implementation of stack and queue.</li>
    <li>Implementation of graphs: Adjacency list representation of graphs is most popular, which uses linked lists to store adjacent vertices.</li>
    <li>Dynamic memory allocation: We use a linked list of free blocks.</li>
    <li>Maintaining a directory of names.</li>
    <li>Performing arithmetic operations on long integers.</li>
    <li>Manipulation of polynomials by storing constants in the nodes of a linked list.</li>
    <li>Representation of a sparse matrix.</li>
    <li>Next and previous operations (Image viewer, Music player, Web browser, etc.).</li>
    <li>Redo and undo functionality.</li>
    <li>Most recently used (MRU) section is represented by a doubly linked list.</li>
    <li>Binary trees can also be applied using a doubly linked list.</li>
    </ul>
     </div>

     <div className="list">
     <h2>Applications</h2>
     <ul>
     <li><b>Multi programming:</b> Multi programming means when multiple programs are running in the main memory. It is essential to organize these multiple programs as queues.</li>
    <li><b>Network:</b> In a network, a queue is used in devices such as a router or a switch. Another application of a queue is a mail queue.</li>
    <li><b>Job Scheduling:</b> The computer has a task to execute a particular number of jobs that are scheduled to be executed one after another. These jobs are assigned one by one to the processor, which is organized using a queue.</li>
    <li><b>Shared resources:</b> Queues are used as waiting lists for a single resource.</li>
    <li>Breadth-first traversal (BFS)</li>
    <li>Level order tree traversal</li>
    <li>Reverse a path in BST using a queue</li>
    <li>Construct a complete binary tree from its linked list representation</li>
    <li>Number of siblings of a given Node in an n-ary tree</li>
    <li>Zig-zag tree traversal</li>
      
     </ul>
     </div>

     <div className="list">
     <h2>Advantage</h2>
     <ul>
     <li>A large amount of data can be managed efficiently with ease.</li>
    <li>Operations such as insertion and deletion can be performed with ease as it follows the First In First Out (FIFO) rule.</li>
    <li>Queues are useful when a particular service is used by multiple customers.</li>
    <li>Queues are fast in speed for data inter-process communication.</li>
    <li>Queues can be used in the implementation of other data structures.</li>
      
      
     </ul>
     </div>

     <div className="list">
     <h2>Disadvantage</h2>
     <ul>
     <li>Limited memory size.</li>
    <li>Chances of stack overflow.</li>
    <li>Random access not possible.</li>
    <li>Undesired termination.</li>
      
      
     </ul>
     </div>

    </div>
    </>
  )
}

export default LinkedList