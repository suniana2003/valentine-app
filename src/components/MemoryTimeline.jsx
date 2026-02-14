import { useState } from "react";

export default function MemoryTimeline({ setPage, setUnlocked }) {
  const questions = [
    { q: "When did our beautiful journey start?", a: "27-04-2021" },
    { q: "When did we propose to each other?", a: "04-09-2022" },
    { q: "When did we take our first train journey together?", a: "14-06-2025" },
    { q: "When did we share our first hug?", a: "26-02-2025" },
    { q: "When do we fight?", a: "Everyday" },
  ];

  const [step, setStep] = useState(0);
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const submit = () => {
    if (input.toLowerCase() === questions[step].a.toLowerCase()) {
      setScore(score + 1);
    }

    setInput("");

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      setShowResult(true);
      setUnlocked((prev) => ({ ...prev, timeline: true }));
    }
  };

  return (
    <div className="fade timelinePage">
      <h1> Let's test your memory! </h1>

      {!showResult && (
        <div className="quizBox">
          <h3>{questions[step].q}</h3>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Answer it baby..."
          />

          <button onClick={submit}>Submit</button>
        </div>
      )}

      {/* RESULT POPUP */}
      {showResult && (
        <div className="resultPopup">
          <div className="resultBox">
            <h2>You scored {score}/{questions.length}</h2>

            <p>
              You’re wondering how you still got full marks even after
              answering some questions wrong…  
              <br /><br />
              Because with us, even the wrong answers are right.  
              <br />
              So officially… you passed our cute little quiz!
            </p>

            <h1> 5/5 ❤️ 100% </h1>

            <button onClick={() => setPage("home")}>
              Back to cards
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
