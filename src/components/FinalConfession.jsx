import { useState } from "react";

export default function FinalConfession({ setPage }) {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);

  const moveNo = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setNoPos({ x, y });
  };

  if (accepted) {
    return (
      <div className="finalPage fade">
        <h1 className="finalYes"> I knew it! </h1>
        <p className="finalMessage"> Forever starts now. </p>
      </div>
    );
  }

  return (
    <div className="finalPage fade">
      <h1 className="finalNames">
        Rafiya Sultana ❤️ Nasar Ahamed

      {/* CONFESSION TEXT */}
      <h2 className="finalQuestion">
{`
We already act like an old married couple.
We argue like one.
We care like one.
We make up like one.

So maybe it’s time we just admit it.

What do you say…
shall we make this official
and grow old together forever?
`}
      </h2>
    
    </h1>

      <div className="btnRow">
        {/* YES */}
        <button
          className="yesBtn"
          onClick={() => setAccepted(true)}
        >
          Yes 💖
        </button>

        {/* NO */}
        <button
          className="noBtn"
          onMouseEnter={moveNo}
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}
