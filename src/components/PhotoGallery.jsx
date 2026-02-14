import { useState } from "react";

export default function PhotoGallery({ setPage, setUnlocked }) {
  const photos = [
    "/P1.jpg",
    "/P2.jpg",
    "/P3.jpg",
    "/P4.jpg",
    "/P5.jpg",
    "/P6.jpg",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="galleryPage">

      <h1>Our Memories</h1>

      {/* STACK */}
      <div className="stack">

        {photos.map((src, i) => {
          const position =
            (i - index + photos.length) % photos.length;

          return (
            <img
              key={i}
              src={src}
              className={`stackPhoto pos${position}`}
            />
          );
        })}

      </div>

      {/* CONTROLS */}
      <div className="controls">
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>

      <button
        className="backBtn"
        onClick={() => {
          setUnlocked((p) => ({ ...p, photos: true }));
          setPage("home");
        }}
      >
        Back
      </button>

    </div>
  );
}
