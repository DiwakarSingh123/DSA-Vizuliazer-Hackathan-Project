import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tree from "react-d3-tree";
import "../Component/Tree.css";
import ArrayFunction from "./ArrayFunction";

// Tree Node Definition
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Function to Insert into a Binary Search Tree
function insertBST(root, value) {
  if (!root) return new TreeNode(value);
  if (value < root.value) root.left = insertBST(root.left, value);
  else root.right = insertBST(root.right, value);
  return root;
}

const TreeVisualizer = () => {
    // State for showing the next section after submitting
    const [show, setShow] = useState(false);
    
  const [check, setCheck] = useState(false);
  const [arrayValues, setArrayValues] = useState([]);
  const [treeRoot, setTreeRoot] = useState(null);
  const [preorderResult, setPreorderResult] = useState([]);
  const [inorderResult, setInorderResult] = useState([]);
  const [postorderResult, setPostorderResult] = useState([]);

  // Build BST when arrayValues update
  useEffect(() => {
    let root = null;
    arrayValues.forEach(value => {
      root = insertBST(root, value);
    });
    setTreeRoot(root);
  }, [arrayValues]);

  // Traversal Functions
  const Preorder = (node, result = []) => {
    if (node) {
      result.push(node.value);
      Preorder(node.left, result);
      Preorder(node.right, result);
    }
    return result;
  };

  const Inorder = (node, result = []) => {
    if (node) {
      Inorder(node.left, result);
      result.push(node.value);
      Inorder(node.right, result);
    }
    return result;
  };

  const Postorder = (node, result = []) => {
    if (node) {
      Postorder(node.left, result);
      Postorder(node.right, result);
      result.push(node.value);
    }
    return result;
  };

  // Handle Traversals
  const handleTraversal = (order) => {
    if (!treeRoot) return;
    if (order === "preorder") setPreorderResult(Preorder(treeRoot, []));
    if (order === "inorder") setInorderResult(Inorder(treeRoot, []));
    if (order === "postorder") setPostorderResult(Postorder(treeRoot, []));
  };

  // Convert tree structure to react-d3-tree format
  const convertToD3Tree = (node) => {
    if (!node) return null;
    return {
      name: String(node.value),
      children: [
        node.left ? convertToD3Tree(node.left) : null,
        node.right ? convertToD3Tree(node.right) : null,
      ].filter(Boolean),
    };
  };

  return (
    <>
    <div className="array-container">
      <h1 style={{ textAlign: "center" }}>Binary Search Tree</h1>
      <div className="operation">
        <h2>Tree Operations</h2>
        <div className="oper-btn">
          <button onClick={() => setCheck(!check)}>Create BST</button>
        </div>
      </div>

      {check && (
        <ArrayFunction
          check={check}
          setCheck={setCheck}
          setShow={setShow}
          arrayValues={arrayValues}
          setArrayValues={setArrayValues}
        />
      )}

      {treeRoot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="tree-container"
        >
          <h2>Binary Tree Visualization</h2>
          <div style={{ width: "100%", height: "500px" }}>
            <Tree data={convertToD3Tree(treeRoot)} orientation="vertical" />
          </div>
        </motion.div>
      )}

      {treeRoot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="tree-traversals"
        >
          <h2 style={{textAlign:"center", marginBottom:"1rem"}}>Traversals</h2>
          <button onClick={() => handleTraversal("preorder")}>Preorder</button>
          <button onClick={() => handleTraversal("inorder")}>Inorder</button>
          <button onClick={() => handleTraversal("postorder")}>Postorder</button>

          <div>
            <h3>Preorder: {preorderResult.join(" → ")}</h3>
          </div>
          <div>
            <h3>Inorder: {inorderResult.join(" → ")}</h3>
          </div>
          <div>
            <h3>Postorder: {postorderResult.join(" → ")}</h3>
          </div>
        </motion.div>
      )}
    </div>

    {/* Here hard code of Tree */}
    <div className="hard-container liear">
     <div className="example">
     <h1>Tree</h1>
     <p>A tree is a non-linear type of data structure that organizes data hierarchically. It consists of nodes connected by edges. Each node contains a value and may or may not have a child node</p>
     <div className="list">
     <h2>Properties of Linear Search</h2>
     <ul>
      <li><strong>Node</strong>: The main component of a tree that stores the data along with the links to other nodes.</li>
      <li><strong>Edge</strong>: Edge (also called branch) connects two nodes of a tree. A node can have more than one edge.</li>
      <li><strong>Parent</strong>: A parent node is a predecessor to any other node. In simple words, it is a node in the tree that has branches to other nodes.</li>
      <li><strong>Child</strong>: The node that is connected below to another node is called a child of that node. All nodes except the root node are child nodes.</li>
      <li><strong>Root</strong>: The first node of the tree that originates it is called the root of the tree. A tree can have only one root.</li>
      <li><strong>Leaf node (External node)</strong>: Nodes with no child are called leaf nodes or external nodes.</li>
      <li><strong>Internal node (Non-Leaf node)</strong>: Nodes with at least one child are called internal nodes or non-leaf nodes.</li>
      <li><strong>Siblings</strong>: Nodes having the same parent are called siblings.</li>
      <li><strong>Cousins</strong>: Nodes belonging to the same level with different parent nodes.</li>
      <li><strong>Degree</strong>: The degree of a node is defined as the number of children of that node. The degree of the tree is the highest degree of a node among all the nodes.</li>
      <li><strong>Path</strong>: The nodes in the tree must be reachable from other nodes through a unique sequence of edges called a path. The number of edges in a path is called the length of the path.</li>
      <li><strong>Level of a node</strong>: The level of a node is defined as the number of edges in the unique path between the root and the node.</li>
      <li><strong>Subtree</strong>: A tree formed by a node and all of its descendants in the tree is called a subtree.</li>
      </ul>

     </div>
     <h4>Example</h4>
     </div>
     <div className="stack-img">
      <img src="https://raj-rathod.github.io/DSA-visualisation-in-angular/assets/ds-image/tree.jpg" alt="" />
     </div>

     

     <div className="list">
     <h2>Type of tree</h2>
     <ul>
    <li>Trees can be used to store data which are in hierarchical form.</li>
    <li>Different types of trees are used in various fields like databases, computer graphics, and computer networks.</li>
    <li>Tree data structures are used by operating systems to manage file directories.</li>
    <li>Databases use tree data structures for indexing.</li>
    <li>Tree data structure is used in file directory management.</li>
    <li>DNS uses tree data structures.</li>
    <li>Trees are used in several games like moves in chess.</li>
    <li>Decision-based algorithms in machine learning use tree algorithms.</li>
    </ul>

     </div>

     <div className="list">
     <h2>Properties</h2>
     <ul>
    <li><strong>Number of edges</strong>: An edge can be defined as the connection between two nodes. If a tree has N nodes, then it will have (N-1) edges. There is only one path from each node to any other node of the tree.</li>
    <li><strong>Depth of a node</strong>: The depth of a node is defined as the length of the path from the root to that node. Each edge adds 1 unit of length to the path. So, it can also be defined as the number of edges in the path from the root of the tree to the node.</li>
    <li><strong>Height of a node</strong>: The height of a node can be defined as the length of the longest path from the node to a leaf node of the tree.</li>
    <li><strong>Height of the tree</strong>: The height of a tree is the length of the longest path from the root of the tree to a leaf node of the tree.</li>
    <li><strong>Degree of a Node</strong>: The total count of subtrees attached to that node is called the degree of the node. The degree of a leaf node must be 0. The degree of a tree is the maximum degree of a node among all the nodes in the tree.</li>
    <li>Traversing in a tree is done by depth-first search and breadth-first search algorithms.</li>
    <li>It has no loop and no circuit.</li>
    <li>It has no self-loop.</li>
    <li>It follows a hierarchical model.</li>
    </ul>

     </div>

     <div className="list">
     <h2>Applications</h2>
     <ul>
      <li><strong>Best Case Complexity</strong> - In linear search, the best case occurs when the element we are finding is at the first position of the array. The best-case time complexity of linear search is <code>O(1)</code>.</li>
      <li><strong>Average Case Complexity</strong> - The average case time complexity of linear search is <code>O(n)</code>.</li>
      <li><strong>Worst Case Complexity</strong> - In linear search, the worst case occurs when the element we are looking for is present at the end of the array. The worst-case in linear search could be when the target element is not present in the given array, and we have to traverse the entire array. The worst-case time complexity of linear search is <code>O(n)</code>.</li>
      <li><strong>Space Complexity</strong> - The space complexity of linear search is <code>O(1)</code>.</li>
      </ul>
     </div>
     
     </div>
    </>
  );
}

export default TreeVisualizer;
