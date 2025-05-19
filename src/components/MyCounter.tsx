import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useSuhuCounterStore } from "@/stores/suhu";

function MyCounter() {
  // const [suhu, setSuhu] = useState<number>(22);
  const {
    counter,
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    reset,
  } = useSuhuCounterStore((state) => state);
  const [background, setBackground] = useState<string>("#03c2fc");
  // useEffect(() => {
  //   if (suhu > 25) {
  //     setBackground("#fcdb03");
  //   } else if (suhu < 20) {
  //     setBackground("#03fc77");
  //   } else {
  //     setBackground("#03c2fc");
  //   }
  // }, [suhu]);

  // const tambah = () => {
  //   // arrow function
  //   if (suhu < 30) {
  //     setSuhu(suhu + 1);
  //   } else {
  //     alert("tidak bisa lebih dari 30");
  //   }
  // };
  // function kurang() {
  //   if (suhu > 16) {
  //     setSuhu(suhu - 1);
  //   } else {
  //     alert("tidak bisa kurang dari 16");
  //   }
  // }

  return (
    <div
      id="my-counter"
      style={{
        backgroundColor: background,
        height: "30vh",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>My Counter Component</h1>
      <h1>{counter}</h1>
      <Button className="bg-blue-400" onClick={increment}>
        Tambah
      </Button>
      <br />
      <Button className="bg-red-400" onClick={decrement}>
        Kurang
      </Button>
      <br />
      <Button className="bg-gray-700" onClick={reset}>
        Reset
      </Button>
      <br />
      <Button onClick={() => incrementByAmount(3)}>Increase by 3</Button>
      <br />
      <Button onClick={() => decrementByAmount(3)}>Decrease by 3</Button>
    </div>
  );
}

export default MyCounter;
