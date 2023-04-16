import React, { useState } from "react";

export default function Lonin() {
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");
  const [input, setInput] = useState({
    id: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, password } = input;
    alert(`아이디: ${id}, 패스워드: ${password}`);
  };

  const handleChange = (e) => {
    // if (e.target.name === "id") return setId(e.target.value);
    // setpassword(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>아이디 : </label>
      <input
        type="text"
        name="id"
        onChange={handleChange}
        // value={id}
        value={input.id}
      />
      <label>패스워드 : </label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        // value={password}
        value={input.password}
      />
      <input type="submit" value="확인" />
    </form>
  );
}
