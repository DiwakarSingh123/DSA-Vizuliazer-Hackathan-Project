import "../Component/ArrayFunction.css";
import { useEffect, useState } from "react";

const ArrayFunction = ({check,setCheck,setShow,arrayValues, setArrayValues}) => {
 // accessing the input value.............................................
 const [inputValue, setInputValue] = useState("");
    const handleChange = (e) => {
        // Replace non-numeric characters (except space) with '0'
        let formattedValue = e.target.value.replace(/[^0-9 ]/g, "0");
        // console.log(formattedValue);
        const arr=formattedValue.split(" ");
        // console.log(arr);
        setInputValue(formattedValue);
       
      };

    // after clicking the submit button.................
    function Changed(){
      setArrayValues(inputValue.split(" "));
      setShow(true)
      setCheck(!check);
    }
   
   
    
    
    // Convert input string to array and update the parent state
    // const newArray = .map(Number);
    // setArrayValues(newArray);
   
    
 
  
    

  return (
   <>
    <div className="arr-fun">
        <img src="https://tse4.mm.bing.net/th?id=OIP.XCU8OZWx_A1W7iW0IjHVGwHaH0&pid=Api&P=0&h=180" alt="" onClick={()=>setCheck(!check)}/>
        <h3>Enter the array elements</h3>
        <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Separate numbers like 1 2 3..."
       
      />
        <span><b>Node: </b>each non-numeric character consider as 0</span>
        <button onClick={Changed}>Submit</button>
    </div>
   
   </>
  )
}

export default ArrayFunction