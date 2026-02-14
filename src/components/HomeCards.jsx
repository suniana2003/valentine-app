import { useState } from "react";
import { Camera, Clock, Mail, Heart } from "lucide-react";

export default function HomeCards({ setPage, unlocked, setUnlocked }) {
  const [active, setActive] = useState(null);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const cardData = {
    photos: {
      password: "Magnets",
      placeholder: "My first gift from you?",
      title: "Our Photos",
    },
    timeline: {
      password: "04-09-2023",
      placeholder: "Proposal Date",
      title: "Our Moments",
    },
    letter: {
      password: "Giddi",
      placeholder: "What do you call me?",
      title: "Letter",
    },
  };

  const openModal = (type) => {
    setActive(type);
    setInput("");
    setError("");
  };

  const submit = () => {
    if (input === cardData[active].password) {
      setUnlocked((prev) => ({ ...prev, [active]: true }));
      setPage(active);
      setActive(null);
    } else {
      setError("So, you can't even remember this? I'm expecting more from you Janu");
    }
  };

  const allOpened =
    unlocked.photos &&
    unlocked.timeline &&
    unlocked.letter;

  return (
    <div className="fade">
      <h1> Welcome to Our World ❤️ </h1>

      <div className="heartGrid">

        {/* PHOTOS */}
        <div className="symbolCard photoCard" onClick={() => openModal("photos")}>
          <Camera size={28} />
          <span className="label">Memories</span>
        </div>

        {/* MOMENTS */}
        <div className="symbolCard timelineCard" onClick={() => openModal("timeline")}>
          <Clock size={28} />
          <span className="label">Moments</span>
        </div>

        {/* LETTER */}
        <div className="symbolCard letterCard" onClick={() => openModal("letter")}>
          <Mail size={28} />
          <span className="label">Letter</span>
        </div>

        {/* FINAL */}
        <div
          className="symbolCard confessionCard"
          onClick={() => {
            if (!allOpened) {
              alert("Unlock all memories first 💖");
              return;
            }
            setPage("confession");
          }}
        >
          <Heart size={30} />
          <span className="label">Confession</span>
        </div>

      </div>

      {/* PASSWORD MODAL */}
      {active && (
        <div className="modal">
          <div className="modalBox">
            <h3>{cardData[active].title}</h3>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={cardData[active].placeholder}
            />

            {error && <p className="error">{error}</p>}

            <button onClick={submit}>Unlock</button>
          </div>
        </div>
      )}
    </div>
  );
}
