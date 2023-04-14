import React, { useState } from "react";

export default function SingleForm() {
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(nickname);
  };

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임 : </label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={nickname}
      />
      <input type="submit" value="제출" />
    </form>
  );
}
