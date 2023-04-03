import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  // 하위 컴포넌트에서 값을 수정할 수 있도록 해야 함!
  // 섭씨에서 수정을 한 것인지, 화씨에서 수정을 한 것인지 알고 있어야 함!
  const [state, setState] = useState({
    scale: "c",
    temperature: 0,
  });

  const handleTemperatureChange = (obj) => {
    // 섭씨에서 수정을 한 것인지, 화씨에서 수정을 한 것인지 파악하여 온도를 확인하는 함수
    setState({
      ...state,
      scale: obj.scale,
      temperature: obj.temperature,
    });
  };

  function toCelsius(fahrenheit) {
    // 화씨를 섭씨로 변환하는 함수
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    // 섭씨를 화씨로 변환하는 함수
    return (celsius * 9) / 5 + 32;
  }

  function tryConvert(temperature, convert) {
    // temperature(섭씨 혹은 화씨 온도)를 convert(toFahrenheit 혹은 toCelsius)에 적용시키는 함수
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const { scale, temperature } = state;

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <>
      <TemperatureInput
        scale={"c"}
        temperature={celsius}
        onTemperatureChange={handleTemperatureChange}
      />
      <TemperatureInput
        scale={"f"}
        temperature={fahrenheit}
        onTemperatureChange={handleTemperatureChange}
      />
    </>
  );
}
