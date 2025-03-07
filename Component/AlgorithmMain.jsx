

const AlgorithmMain = () => {
  return (
    <div className="Data-structure">
      <div>
      <h1 style={{textAlign:"center"}}>Algorithms</h1>
      <p>
      An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as an exact list of instructions that conduct specified actions step by step in either hardware- or software-based routines
      </p>
      </div>

      <div>
      <h2>What are the Characteristics of an Algorithm</h2>
      <ul>
      <li><strong>Clear and Unambiguous:</strong> The algorithm should be clear and unambiguous. Each of its steps should be clear in all aspects and must lead to only one meaning.</li>
      <li><strong>Well-Defined Inputs:</strong> If an algorithm says to take inputs, it should have well-defined inputs.</li>
      <li><strong>Well-Defined Outputs:</strong> The algorithm must clearly define what output will be yielded, and it should be well-defined as well.</li>
      <li><strong>Finite-ness:</strong> The algorithm must be finite, i.e., it should terminate after a finite time.</li>
      <li><strong>Feasible:</strong> The algorithm must be simple, generic, and practical, such that it can be executed with the available resources. It must not rely on some future technology or anything unrealistic.</li>
      <li><strong>Language Independent:</strong> The algorithm must be language-independent, i.e., it must be just plain instructions that can be implemented in any language, and yet the output will be the same as expected.</li>
      </ul>

      </div>

      <div>
      <h2>Five features to consider when choosing a data structure</h2>
      <ul>
      <li>It should terminate after a finite time.</li>
      <li>It should produce at least one output.</li>
      <li>It should take zero or more inputs.</li>
      <li>It should be deterministic, meaning it gives the same output for the same input case.</li>
      <li>Every step in the algorithm must be effective, i.e., every step should perform some meaningful work.</li>
      </ul>

      </div>

      <div>
      <h2>Types of Algorithm  </h2>
      <ul>
      <li><strong>Brute Force Algorithm:</strong> It is the simplest approach for a problem. A brute force algorithm is the first approach that comes to mind when we see a problem.</li>
      <li><strong>Recursive Algorithm:</strong> A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and calls the same function repeatedly.</li>
      <li><strong>Sorting Algorithm:</strong> Sorting arranges a group of data in a particular manner according to the requirement. Sorting algorithms are used to sort data in increasing or decreasing order.</li>
      <li><strong>Searching Algorithm:</strong> Searching algorithms are used to find elements or groups of elements from a particular data structure. They can vary based on their approach or the data structure used.</li>
      <li><strong>Hashing Algorithm:</strong> Hashing algorithms work similarly to searching algorithms but contain an index with a key ID. In hashing, a key is assigned to specific data.</li>
      <li><strong>Divide and Conquer Algorithm:</strong> This algorithm breaks a problem into sub-problems, solves a single sub-problem, and merges the solutions to get the final result. It consists of three steps:
      <ul>
          <li>Divide</li>
          <li>Solve</li>
          <li>Combine</li>
      </ul>
      </li>
      <li><strong>Dynamic Programming Algorithm:</strong> This algorithm uses previously found solutions to avoid redundant calculations. It divides the problem into smaller overlapping subproblems and solves them.</li>
      <li><strong>Greedy Algorithm:</strong> The solution is built part by part, with each part being selected based on the immediate benefit. The option providing the most benefit is chosen at each step.</li>
      <li><strong>Backtracking Algorithm:</strong> This algorithm builds a solution by searching through all possible solutions. If a solution fails, it backtracks to the failure point and explores another path.</li>
      <li><strong>Randomized Algorithm:</strong> A randomized algorithm uses a random number to influence decision-making, often leading to an expected outcome.</li>
      </ul>


      </div>

      <div>
      <h2>How to Design an Algorithm</h2>
      <ul>
      <li><strong>Clear Problem Definition:</strong> The problem that is to be solved by this algorithm must be well-defined.</li>
      <li><strong>Consideration of Constraints:</strong> The constraints of the problem must be considered while solving it.</li>
      <li><strong>Input Specification:</strong> The input required to solve the problem should be clearly defined.</li>
      <li><strong>Expected Output:</strong> The output that should be obtained when the problem is solved must be specified.</li>
      <li><strong>Solution within Constraints:</strong> The solution to this problem should be within the given constraints.</li>
      </ul>

      </div>

      <div style={{marginBottom:"1rem"}}>
      <h2>How to Design an Algorithm</h2>
      <ul>
      <li><strong>Clear Problem Definition:</strong> The problem that is to be solved by this algorithm must be well-defined.</li>
      <li><strong>Consideration of Constraints:</strong> The constraints of the problem must be considered while solving it.</li>
      <li><strong>Input Specification:</strong> The input required to solve the problem should be clearly defined.</li>
      <li><strong>Expected Output:</strong> The output that should be obtained when the problem is solved must be specified.</li>
      <li><strong>Solution within Constraints:</strong> The solution to this problem should be within the given constraints.</li>
      </ul>

      </div>

     

    </div>
  )
}

export default AlgorithmMain;