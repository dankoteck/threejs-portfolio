import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Skills() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlipped = () => setIsFlipped(!isFlipped);

  return (
    <section className="relative z-0 p-16 mx-auto max-w-7xl">
      <div onMouseEnter={toggleFlipped} onMouseLeave={toggleFlipped} className="w-fit">
        <ReactCardFlip isFlipped={isFlipped}>
          <div className="w-40 h-40 text-black bg-white">Front</div>

          <div className="w-40 h-40 text-black bg-white">Back</div>
        </ReactCardFlip>
      </div>
    </section>
  );
}
