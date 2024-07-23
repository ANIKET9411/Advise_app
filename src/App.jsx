import { useState } from "react";
import reactLogo from "./Assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Advice_card from "./component/Advice_card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Advice_card />
    </>
  );
}

export default App;
