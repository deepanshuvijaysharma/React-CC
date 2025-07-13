import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);
  // let myObj = {
  //   username: "hitesh",
  //   age: 21,
  // };

  // let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card
        // name="Deepanshu"
        // subject="react"
        // info={myObj.username}
        // someObj={newArr[1]}
        username="deepanshu@gmail.com"
      />
      <Card username="raja" />
    </>
  );
}

export default App;
