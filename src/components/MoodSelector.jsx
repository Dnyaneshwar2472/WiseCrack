import { Smile, Heart, Zap, Sparkles } from "lucide-react";

const moods = [
  { id: "life", label: "Life", icon: <Heart size={30} /> },
  { id: "inspirational", label: "Inspirational", icon: <Sparkles size={30} /> },
  { id: "funny", label: "Funny", icon: <Smile size={30} /> },
  { id: "energetic", label: "Energetic", icon: <Zap size={30} /> },
];

export default function MoodSelector({ onSelect, selectedMood }) {
  return (
    <div className="mood-wrapper">
      <h2 className="mood-title">Choose a Mood:</h2>

      <div className="mood-grid">
        {moods.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelect(m.id)}
           className={`mood-btn ${selectedMood === m.id ? "mood-active" : ""}`}

          >
            {m.icon}
            <span className="mood-label">{m.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
