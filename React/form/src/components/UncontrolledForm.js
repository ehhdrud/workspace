import React, { useRef } from "react";

export default function UncontrolledForm() {
  // useRef() 훅을 사용하여 ref 객체 생성
  const inputRef = useRef();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // inputRef.current를 사용하여 <input> 요소의 값에 접근
    alert(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      {/* inputRef를 <input> 요소의 ref 속성으로 전달하여 ref 생성 */}
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        ref={inputRef}
      />
      <input type="submit" value="제출" />
    </form>
  );
}

/*
// 클래스형 컴포넌트는 이렇게 !
import React, { Component } from "react";

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleChange = (e) => {
    console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>닉네임 : </label>
        <input
          type="text"
          name="nickname"
          onChange={this.handleChange}
          ref={this.inputRef}
        />
        <input type="submit" value="제출" />
      </form>
    );
  }
}

export default UncontrolledForm;
*/
