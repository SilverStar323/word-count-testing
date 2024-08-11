import { useState } from "react"

export const Counter = () => {
  const [strText, setStrText] = useState("");

  return (
    <section className="counter">
      <textarea
        name="text"
        placeholder="Type or paste your text"
        data-testid="textArea"
        value={strText}
        onChange={e => setStrText(e.target.value)}/>
      <button
        className="clear"
        disabled={!strText}
        data-testid="clearBtn"
        onClick={() => setStrText("")}>
          Clear
      </button>
      <div className="result">
        <span data-testid="characterLength">Character: {strText.length}</span>
        <span data-testid="wordLength">Word: {strText ? strText.trim().split(/\s+/).length : 0}</span>
      </div>
    </section>
  )
}