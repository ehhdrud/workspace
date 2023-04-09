import React from "react";

export default class ClassClock extends React.Component {
  // 컴포넌트가 '생성될 때', 즉 React 엘리먼트를 생성하고 초기 상태를 설정하는 단계에서 호출되는 메서드이다.
  constructor(props) {
    // super()는 React.Component 클래스의 생성자를 호출한다. ❗❓
    super(props);
    this.state = { date: new Date() };
  }

  // 새로운 Date값을 date에 할당하는 tick() 함수를 정의한다.
  // 참고로, 클래스 내에서 함수를 정의할 때는 "function" 키워드를 붙이지 않아도 됨 !
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  // 컴포넌트가 '마운트된 후', 즉 React 엘리먼트가 브라우저 DOM에 마운트된 직후에 호출되는 메서드이다.
  componentDidMount() {
    // Mount시, 즉 생성 단계에 setInterval 함수를 한번만 실행하도록 설정한다.
    // setInterval 함수는 한번만 실행하면, 1초마다 tick함수를 실행하여 새로운 Date값을 가져와 state의 date에 할당한다.
    console.log("componentDidMount(Class)");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // 컴포넌트가 '업데이트된 후' 호출되는 메서드이다.
  componentDidUpdate() {
    console.log("componentDidUpdate(Class)");
    console.log(this.state.date);
  }

  // 컴포넌트가 '언마운트된 후' 호출되는 메서드이다.
  componentWillUnmount() {
    console.log("componentWillUnmount(Class)");
    clearInterval(this.timerID);
  }

  render() {
    // 첫 렌더링을 정의한다.
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
