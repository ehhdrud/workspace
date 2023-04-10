import React, { useState, useEffect } from "react";
import data from "./data/cards";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  const [cards, setCards] = useState([]);
  const [pickedCards, setPickedCards] = useState([]);

  function draw() {
    // 추첨 완료
    if (pickedCards.length > 2) {
      const names = pickedCards.reduce((acc, cur) => {
        return (acc = acc.concat(`${cur.name} `));
      }, "");
      alert(`당첨자는 ${names}입니다`);
      return;
    }

    // 랜덤하게 하나의 명함을 고르는 동작
    const randomIdx = Math.floor(Math.random() * cards.length);
    const randomItem = cards[randomIdx];

    // 중복 제거
    setCards(cards.filter((c) => c.phoneNumber !== randomItem.phoneNumber));

    // 당첨자 관리
    setPickedCards([...pickedCards, randomItem]);
  }

  useEffect(() => {
    setCards(data);
  }, []);

  return (
    <div>
      {cards.length > 0 && <button onClick={draw}>추첨하기</button>}
      {pickedCards.length > 0 && (
        <BusinessCard info={pickedCards[pickedCards.length - 1]} />
      )}
    </div>
  );
}
