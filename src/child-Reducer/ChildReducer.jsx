import React from "react";
import { useContext } from "react";
import SecondContext from "../context/contextReducer/SecondContext";
export default function ChildReducer() {
  const { Text1, ChangeText } = useContext(SecondContext);
  return (
    <>
      <p>{Text1}</p> {/* coming from parent */}
      <input onChange={ChangeText} />
      {/* going to parent using callback function*/}
    </>
  );
}
