import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Child from './Child';
export default function Parent() {
  const [Text, setText] = useState('default text');

  useEffect(() => {
    setText('Text on 1st render');
    console.log('run');
  }, []); //will only renders once, can add dependency to run on value change

  const changeTexthandler = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Child val={Text} changeText={changeTexthandler} />
    </>
  );
}
