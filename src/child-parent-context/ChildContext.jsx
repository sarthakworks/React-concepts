import React from "react";
import { useContext } from "react";
import SimpleContext from "../context/simpleContext/SimpleContext";
export default function ChildContext() {
  const { Text, ChangeText } = useContext(SimpleContext);
  return (
    <>
      <p>{Text}</p> {/* coming from parent */}
      <input onChange={ChangeText} />
      {/* going to parent using callback function*/}
    </>
  );
}
