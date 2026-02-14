import { useState, useEffect, useRef } from "react";
import IntroScreen from "./components/IntroScreen";
import HomeCards from "./components/HomeCards";
import PhotoGallery from "./components/PhotoGallery";
import MemoryTimeline from "./components/MemoryTimeline";
import SecretLetter from "./components/SecretLetter";
import FinalConfession from "./components/FinalConfession";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("intro");

  const [unlocked, setUnlocked] = useState({
    photos: false,
    timeline: false,
    letter: false,
    confession: false,
  });

  /* 🎵 BACKGROUND MUSIC */
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play().catch(() => {});

        let vol = 0;
        const fade = setInterval(() => {
          vol += 0.05;
          if (audioRef.current) audioRef.current.volume = vol;
          if (vol >= 0.4) clearInterval(fade);
        }, 200);
      }
    };

    document.addEventListener("click", startMusic);
    return () => document.removeEventListener("click", startMusic);
  }, []);

  return (
    <div className="app">
      {/* 🎵 MUSIC PLAYER */}
      <audio ref={audioRef} src="/love.mp3" loop />

      <div className="container">

        {page === "intro" && <IntroScreen setPage={setPage} />}

        {page === "home" && (
          <HomeCards
            setPage={setPage}
            unlocked={unlocked}
            setUnlocked={setUnlocked}
          />
        )}

        {page === "photos" && (
          <PhotoGallery
            setPage={setPage}
            setUnlocked={setUnlocked}
          />
        )}

        {page === "timeline" && (
          <MemoryTimeline
            setPage={setPage}
            setUnlocked={setUnlocked}
          />
        )}

        {page === "letter" && (
          <SecretLetter
            setPage={setPage}
            setUnlocked={setUnlocked}
          />
        )}

        {page === "confession" && <FinalConfession setPage={setPage} />}

      </div>
    </div>
  );
}
