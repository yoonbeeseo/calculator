import { useCallback, useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [action, setAction] = useState("");
  const [res, setRes] = useState(null);

  const leng1 = useMemo(() => num1.length, [num1]);
  const leng2 = useMemo(() => num2.length, [num2]);

  const onAction = useCallback((e) => {
    const value = e.target.innerText;

    console.log(value);
    if (value === "AC") {
      setNum1("");
      setNum2("");
      setAction("");
      setRes(null);
    } else {
      setAction(value);
    }
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(num1, num2, action);

      if (leng1 === 0) {
        // return alert("첫 번째 숫자를 입력하셈");
        return;
      }

      if (action.length === 0) {
        return alert("부등호를 선택하세요.");
      }

      if (leng2 === 0) {
        return alert("두 번째 숫자를 입력하셈");
      }

      const n1 = Number(num1);
      const n2 = Number(num2);

      setNum2("");
      switch (action) {
        case "+":
          setNum1(n1 + n2);
          return setRes(n1 + n2);
        case "-":
          setNum1(n1 - n2);
          return setRes(n1 - n2);
        case "*":
          setNum1(n1 * n2);
          return setRes(n1 * n2);
        case "/":
          setNum1(n1 / n2);
          return setRes(n1 / n2);
      }
    },
    [num1, num2, action, leng1, leng2]
  );

  const onNum = useCallback(
    (e) => {
      const value = e.target.innerText;

      if (!res) {
        console.log(action.length);
        if (action.length === 0) {
          setNum1((prev) => prev + value);
        } else {
          setNum2((prev) => prev + value);
        }
      }
      setRes(null);
      setNum2((prev) => prev + value);
    },
    [action, res]
  );

  useEffect(() => {
    console.log({ num1, action, num2 });
  }, [num1, action, num2]);

  return (
    <>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <img src={reactLogo} className="logo react" alt="React logo" />
      <form onSubmit={onSubmit} className="cal">
        <div className="h">
          <h1>
            {res
              ? res
              : action.length === 0
              ? num1.length === 0
                ? 0
                : num1
              : num2.length === 0
              ? 0
              : num2}
          </h1>
        </div>
        <div className="wrap">
          <button type="button" onClick={onAction}>
            +
          </button>
          <button type="button" onClick={onAction}>
            -
          </button>
          <button type="button" onClick={onAction}>
            *
          </button>
          <button type="button" onClick={onAction}>
            /
          </button>
        </div>
        <div className="wrap">
          <button type="button" onClick={onNum}>
            7
          </button>
          <button type="button" onClick={onNum}>
            8
          </button>
          <button type="button" onClick={onNum}>
            9
          </button>
        </div>
        <div className="wrap">
          <button type="button" onClick={onNum}>
            4
          </button>
          <button type="button" onClick={onNum}>
            5
          </button>
          <button type="button" onClick={onNum}>
            6
          </button>
        </div>
        <div className="wrap">
          <button type="button" onClick={onNum}>
            1
          </button>
          <button type="button" onClick={onNum}>
            2
          </button>
          <button type="button" onClick={onNum}>
            3
          </button>
        </div>
        <div className="wrap">
          <button type="button" onClick={onNum}>
            0
          </button>
          <button>=</button>
          <button type="button" onClick={onAction}>
            AC
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
