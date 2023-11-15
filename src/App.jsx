import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import SetupQuize from "./pages/setupQuiz";
import { newData } from "./apis/test";

function App() {
  const [count, setCount] = useState(0);
  console.log(1111, newData);

  return (
    <>
      <SetupQuize />
    </>
  );
}

export default App;
