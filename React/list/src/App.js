export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((idx) => <li>{idx}</li>);
  console.log(listItems);

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
