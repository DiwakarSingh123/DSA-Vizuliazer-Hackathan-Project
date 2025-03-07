import { useState } from "react";
import "../Component/Linear.css";
import ArrayFunction from "./ArrayFunction";
const Searching = () => {

  
  // for checking the array.........
   const[check,setCheck]=useState(false);

   // Lifted State for Array Values
   const [arrayValues, setArrayValues] = useState([]);
   console.log(arrayValues);

   // State for showing the next section after submitting
  const [show, setShow] = useState(false);

  // this is for searching the elemetns
  const [search,setSearch]=useState(0);
  // console.log(search);
  

  // Linear search operation is here
    const LinearSearch = (searchValue) => {
      for (let i = 0; i < arrayValues.length; i++) {
       if(searchValue==arrayValues[i]) return i;
      }
      return -1;
    };
  
  // handleclick here..................
  const handleClick=()=>{
    const value=prompt("Enter Element whatever you want to search in array")
    const val=LinearSearch(value)
    alert(val >= 0 ? `Given element at index ${val}` : "Not Founded");
    setSearch(value);
  }

  return (
   <>
    <div className="array-container">
      <h1 style={{textAlign:"center"}}>Linear Search</h1>
      <div className="operation">
        <h2>Linear Search operations</h2>
        <div className="oper-btn">
        <button onClick={()=>setCheck(!check)}>Create a Linear Search</button>
        {show ? <button onClick={()=>handleClick()}>Search Element</button>:null}
        </div>
        {
          arrayValues.length>0 ?
          <div className="creat-linear">
            {arrayValues.map((val,ind)=>{
             return  <div className="hero" key={ind}>
                      <span>{ind}</span>
                      <p>{val}</p>
                      </div>
            
            })}
          </div>
          :null
        }

      </div>
      {check ? <ArrayFunction check={check} setCheck={setCheck} setShow={setShow} arrayValues={arrayValues} setArrayValues={setArrayValues}/> :""}
    </div>

     {/* Here hard code of Linear Search */}
     <div className="hard-container liear">
     <div className="example">
     <h1>Linear Search</h1>
     <p>Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set. It is the easiest searching algorithm</p>
     <h4>Example</h4>
     </div>
     <div className="stack-img">
      <img src="https://tse4.mm.bing.net/th?id=OIP.sDHMdYRAz380AV2wiCjeHwHaCh&pid=Api&P=0&h=180" alt="" />
     </div>

     <div className="list">
     <h2>Properties of Linear Search</h2>
     <ul>
      <li>It can be implemented on both a single and multidimensional array.</li>
      <li>It is preferable for small-sized data sets.</li>
      <li>The linear search can be implemented on any linear data structure such as an array, linked list, etc.</li>
      <li>In a linear search, the elements don't need to be arranged in sorted order.</li>
      </ul>
     </div>

     <div className="list">
     <h2>Follow the below steps to solve the problem</h2>
     <ul>
      <li>Start from the leftmost element of <code>arr</code> and one by one compare <code>x</code> with each element of <code>arr</code>.</li>
      <li>If <code>x</code> matches with an element, return the index.</li>
      <li>If <code>x</code> doesn’t match with any of the elements, return <code>-1</code>.</li>
      </ul>

     </div>

     <div className="list">
     <h2>Applications of Linear Search</h2>
     <ul>
    <li>Linear search can be applied to both single-dimensional and multi-dimensional arrays.</li>
    <li>Linear search is easy to implement and effective when the array contains only a few elements.</li>
    <li>Linear search is also efficient when the search is performed to fetch a single element in an unordered list.</li>
    </ul>

     </div>

     <div className="list">
     <h2>Performance of Linear Search</h2>
     <ul>
  <li><strong>Best Case Complexity</strong> - In linear search, the best case occurs when the element we are finding is at the first position of the array. The best-case time complexity of linear search is <code>O(1)</code>.</li>
  <li><strong>Average Case Complexity</strong> - The average case time complexity of linear search is <code>O(n)</code>.</li>
  <li><strong>Worst Case Complexity</strong> - In linear search, the worst case occurs when the element we are looking for is present at the end of the array. The worst-case in linear search could be when the target element is not present in the given array, and we have to traverse the entire array. The worst-case time complexity of linear search is <code>O(n)</code>.</li>
  <li><strong>Space Complexity</strong> - The space complexity of linear search is <code>O(1)</code>.</li>
</ul>

     </div>

     <div className="list">
     <h2>Advantages of Linear Search</h2>
     <ul>
      <li>Will perform fast searches on small to medium lists. With today's powerful computers, small to medium arrays can be searched relatively quickly.</li>
      <li>The list does not need to be sorted. Unlike a binary search, linear searching does not require an ordered list.</li>
      <li>Not affected by insertions and deletions. As the linear search does not require the list to be sorted, additional elements can be added and deleted. Since other searching algorithms may have to reorder the list after insertions or deletions, this may sometimes make a linear search more efficient.</li>
      </ul>

     </div>

     <div className="list">
     <h2>Disadvantages of Linear Search</h2>
     <ul>
      <li>Slow searching of large lists. For example, when searching through a database of everyone in Northern Ireland to find a particular name, it might be necessary to search through 1.8 million names before finding the desired one. This speed disadvantage is why other search methods have been developed.</li>
      </ul>
    </div>
     </div>
   </>

  )
}

export default Searching;