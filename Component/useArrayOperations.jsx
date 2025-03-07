import { useState } from "react";

const useArrayOperations = (initialArray, setArrayValues) => {
  const [array, setArray] = useState(initialArray);

  const insertAtFirst = (value) => {
    setArrayValues((prev) => [value, ...prev]);
  };

  const insertAtEnd = (value) => {
    setArrayValues((prev) => [...prev, value]);
  };

  const insertAtIndex = (index, value) => {
    setArrayValues((prev) => {
      if (index < 0 || index > prev.length) return prev;
      let newArray = [...prev];
      newArray.splice(index, 0, value);
      return newArray;
    });
  };

  const deleteAtFirst = () => {
    setArrayValues((prev) => prev.slice(1));
  };

  const deleteAtEnd = () => {
    setArrayValues((prev) => prev.slice(0, -1));
  };

  const deleteAtIndex = (index) => {
    setArrayValues((prev) => {
      if (index < 0 || index >= prev.length) return prev;
      let newArray = [...prev];
      newArray.splice(index, 1);
      return newArray;
    });
  };

  const updateAtFirst = (value) => {
    setArrayValues((prev) => [value, ...prev.slice(1)]);
  };

  const updateAtEnd = (value) => {
    setArrayValues((prev) => [...prev.slice(0, -1), value]);
  };

  const updateAtIndex = (index, value) => {
    setArrayValues((prev) => {
      if (index < 0 || index >= prev.length) return prev;
      let newArray = [...prev];
      newArray[index] = value;
      return newArray;
    });
  };

  return {
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
  };
};

export default useArrayOperations;
