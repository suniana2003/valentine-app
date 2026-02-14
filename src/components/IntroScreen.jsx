export default function IntroScreen({ setPage }) {
  return (
    <div className="intro">

      {/* floating hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>💘</span>
        <span>💗</span>
      </div>

      <div className="introBox">
        <h1 className="introTitle">Hey My Junior 💌</h1>

        <p className="introText">
          I built a little world for us.<br/>
          Enter carefully… memories inside.
        </p>

        <button className="enterBtn" onClick={() => setPage("home")}>
          Enter Our Story →
        </button>
      </div>
    </div>
  );
}
