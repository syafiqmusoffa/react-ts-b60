// import MyCounter from "../components/MyCounter";
// import MyForm from "../components/MyForm";
// import UserData from "../components/UserData";

import { Button } from "@/components/ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";
import { NavLink } from "react-router-dom";

function About() {
  const {
    counter,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  } = useSuhuCounterStore((state) => state);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <p>This is about page</p>
      <p>suhu saat ini: {counter}</p>
      <NavLink to="/">kembali ke Home</NavLink>

      <br />
      <Button onClick={reset}>Reset</Button>
    </main>
  );
}

export default About;
