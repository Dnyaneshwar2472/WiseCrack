import { useState, useEffect } from "react";

import MoodSelector from "../components/MoodSelector";
import QuoteCard from "../components/QuoteCard";
import { RefreshCw } from "lucide-react";
import { getQuote } from "../utils/api";

export default function Home() {
  const [topic, setTopic] = useState("life");
  const [quote, setQuote] = useState("");

  const generateNew = async () => {
    const q = await getQuote(topic);
    setQuote(q);
  };

  // Fetch quote only once on mount
  useEffect(() => {
    async function fetchQuote() {
      const q = await getQuote(topic);
      setQuote(q);
    }
    fetchQuote();
  }, [topic]);

  return (
    <>
      {/*  FIX: Pass selectedMood */}
      <MoodSelector 
        onSelect={(m) => setTopic(m)} 
        selectedMood={topic} 
      />

      <div className="home-btn-wrapper">
        <button onClick={generateNew} className="home-generate-btn">
          <RefreshCw size={24} />
          New Crack about {topic}
        </button>
      </div>

      <QuoteCard text={quote} />
    </>
  );
}
