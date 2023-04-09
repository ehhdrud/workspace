import React, { useState, useEffect } from "react";

export default function FunctionClock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  // Mount 시 동작을 정의한다.
  useEffect(() => {
    console.log("componentDidMount(Function)");
    const timerID = setInterval(tick, 1000);

    // Unmount 시 동작을 정의한다.
    // 어떤 useEffect에 들어가더라도 상관은 없지만, setInterval과 붙어있는 것이 가독성에 유리하기 때문에 이쪽에 작성 !
    return () => {
      console.log("componentWillUnmount(Function)");
      clearInterval(timerID);
    };
  }, []);

  // Update 시 동작을 정의한다.
  useEffect(() => {
    console.log("conponentDidUpdate(Function)");
    console.log(date);
  }, [date]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
