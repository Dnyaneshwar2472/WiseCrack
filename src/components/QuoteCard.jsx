import { Heart } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";

export default function QuoteCard({ text }) {
  const { favorites, addFavorite } = useFavorites();

  // If no text available, hide component
  if (!text || text.trim() === "") return null;

  // Check if this quote is already favorited
  const isFavorite = favorites.includes(text);

  return (
    <div className="quote-card-wrapper">
      <div className="quote-card">
        <p>{text}</p>

        <button
          onClick={() => addFavorite(text)}
          className={`favorite-btn ${isFavorite ? "favorite-active" : ""}`}
        >
          <Heart
            size={28}
            fill={isFavorite ? "red" : "none"}
            color={isFavorite ? "red" : "black"}
          />
        </button>
      </div>
    </div>
  );
}
