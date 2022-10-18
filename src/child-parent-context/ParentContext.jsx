import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import ChildContext from "./ChildContext";
export default function ParentContext() {
  return (
    <>
      <ChildContext />
    </>
  );
}
