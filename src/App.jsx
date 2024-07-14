import { useState } from "react";
import "./App.css";
import text from "./data";
function App() {
  const [count, setCount] = useState(1);
  const [textval, setText] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    const nText = text.slice(0, count);
    console.log(nText);
    setText(nText);
  }
  return (
    <section className="section-center">
      <h4>tired of boaring lorem ipsum </h4>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {textval.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
