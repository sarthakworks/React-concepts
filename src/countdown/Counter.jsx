import { useContext, useState } from "react";
import SecondContext from "../context/contextReducer/SecondContext";
function Counter() {
  const { state, dispatch } = useContext(SecondContext);
  return (
    <>
      {/* <p>{count}</p> */}

      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        {state.count}
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
