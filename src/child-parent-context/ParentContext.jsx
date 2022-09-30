import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import ChildContext from './ChildContext';
export default function ParentContext() {
  const [Text, setText] = useState('default text');

  useEffect(() => {
    setText('Text on 1st jjjrender');
    console.log('run');
  }, []); //will only renders once, can add dependency to run on value change

  const changeTexthandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <ChildContext val={Text} changeText={changeTexthandler} />
    </>
  );
}
