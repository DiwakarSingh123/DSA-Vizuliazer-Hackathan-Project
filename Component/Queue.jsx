import React, { useState } from "react";
import "./Queue.css"; // Ensure this file has the updated CSS

const Queue = () => {
  const [queue, setQueue] = useState([]);

  const Enqueue = () => {
    const value = prompt("Enter the value");
    if (value !== null) {
      setQueue([...queue, value]); 
    }
  };

  const Dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1)); 
    } else {
      alert("Queue is empty!");
    }
  };

  const ClearAll = () => {
    setQueue([]); 
  };

  return (
   <>
    <div className="Queue-container">
      <h2 style={{ textAlign: "center" }}>QUEUE</h2>
      <h3 style={{ textAlign: "center" }}>Queue Operations</h3>

      <div className="operation-btn">
        <button onClick={Enqueue}>ENQUEUE</button>
        <button onClick={Dequeue}>DEQUEUE</button>
        <button onClick={ClearAll}>CLEAR ALL</button>
      </div>

      <div className="showing-result">
        <div className="Arrow">
          {queue.length > 0 && (
            <div className="arrow-head">
              <p>Front</p>
              <img
                src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/arrow.png"
                alt=""
              />
            </div>
          )}
        </div>

        <div className={queue.length==0 ? "queue-box":"kalu"}>
          {queue.length > 0 ? (
            queue.map((val, index) => <div key={index} className="queue-item">{val}</div>)
          ) : (
            <div className="res-box">Empty</div>
          )}
        </div>

        <div className="Arrow">
          {queue.length > 0 && (
            <div className="arrow-tail">
              <p>Rear</p>
              <img
                src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/icons/arrow.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>

    {/* Hard code start from here */}
    <div className="hard-container">
     <div className="example">
     <h1>Queue</h1>
     <p>A Queue is a linear data structure which follows the particular order inwhich the operations are performed. The order is FIFO(First In Firts Out).</p>
     <h4>Example</h4>
     </div>
     <div className="stack-img">
      <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/ds-image/queue.jpg" alt="" />
     </div>

     <div className="list">
     <h2>Properties</h2>
     <ul>
      <li>In a queue, elements are inserted at the rear (end) and removed from the front (opposite ends).</li>
      <li>Similar to stacks, queues can be implemented using arrays (fixed size) or linked lists (dynamic size).</li>
      <li>If the allocated space for the queue is full, any attempt to add more elements leads to a queue overflow. The opposite, any attempt to remove elements from an empty queue leads to a queue underflow.</li>
     </ul>
     </div>

     <div className="list">
     <h2>Operation</h2>
     <ul>
      <li>Add</li>
      <li>Remove/pool</li>
      <li>Peek</li>
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
  );
};

export default Queue;
