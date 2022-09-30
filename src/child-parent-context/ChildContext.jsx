import React from 'react';
import { useEffect, useState } from 'react';

export default function ChildContext({ val, changeText }) {
  return (
    <>
      <p>{val}</p> {/* coming from parent */}
      <input onChange={changeText} />
      {/* going to parent using callback function*/}
    </>
  );
}
