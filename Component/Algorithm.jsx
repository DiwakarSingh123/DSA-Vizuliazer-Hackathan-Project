import "../Component/Algorithm.css";
import { useNavigate } from "react-router"; // Correct import
import DataStructure from "./DataStructure";
import Arrays from "./Arrays";
import Stack from "./Stack";
import Queue from "./Queue";
import LinkedList from "./LinkedList";
import Searching from "./Searching"
import Sorting from "./Sorting";
import Tree from "react-d3-tree";
import AlgorithmMain from "./AlgorithmMain";

// Algorithm Component
const Algorithm = ({ firstAlgoName = [] }) => {
  const navigate = useNavigate(); // For programmatic navigation

  const modules = [
    "DataStructure",
    "Arrays",
    "Stack",
    "Queue",
    "LinkedList",
    "Searching",
    "Sorting",
    "Tree",
    "AlgorithmMain",
  ];

  const handleChange = (event) => {
    const selectedModule = event.target.value;
    if (selectedModule) {
      navigate("/" + selectedModule); // Navigate to the selected route
    }
  };

  return (
    <select className="select" onChange={handleChange}>
      <option value="" disabled selected>
        Select an Algorithm
      </option>
      {firstAlgoName.map((val, index) => (
        <option key={index} value={modules[index]}>
          {val}
        </option>
      ))}
    </select>
  );
};

// Second Select Component (if needed)
// export function Algorithms({ secondAlgoName = [] }) {
//   return (
//     <select className="select">
//       {secondAlgoName.map((val, index) => (
//         <option key={index}>{val}</option>
//       ))}
//     </select>
//   );
// }

export default Algorithm;
