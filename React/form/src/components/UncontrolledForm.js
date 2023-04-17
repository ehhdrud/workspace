import React, { useRef } from "react";

export default function UncontrolledForm() {
  // useRef() 훅을 사용하여 ref 객체를 생성한다.
  const inputRef = useRef();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // inputRef.current를 사용하여 <input> 요소의 값에 접근한다.
    alert(inputRef.current.value);
    // ref.current.focus()는 React에서 사용되는 함수 중 하나로, 해당 ref가 가리키는 DOM 노드(element)에 포커스를 설정하는 역할을 한다.
    inputRef.current.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        // inputRef를 <input> 요소의 ref 속성으로 전달한다.
        // 함수 컴포넌트에서 ref 속성을 사용할 수는 없지만, 함수 컴포넌트 내부에서 DOM 요소나 클래스형 컴포넌트에 인스턴스에 접근하기 위해 ref 속성을 사용하는 것은 가능 !
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
    this.inputRef.current.focus();
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
