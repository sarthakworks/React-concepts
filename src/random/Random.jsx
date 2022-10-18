import { useState } from "react";

function Random() {
  //search
  let data = ["apple", "orange", "mango"];
  const [text, settext] = useState(data);
  function search(e) {
    settext(
      data.filter((i) => {
        return i.indexOf(e.target.value) > -1;
      })
    );
  }

  //timer
  return (
    <>
      <p>Search</p>

      <input onChange={search} />
      <ul>
        {text.map((i) => (
          <li>{i}</li>
        ))}
      </ul>

      <p>Timer</p>
      
    </>
  );
}

export default Random;
