import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="fav-wrapper">
      <h1 className="fav-title">❤️ Your Favorite Cracks</h1>

      {favorites.length === 0 && (
        <p className="fav-empty">No favorites saved yet.</p>
      )}

      <ul className="fav-list">
        {favorites.map((q, i) => (
          <li key={i} className="fav-item">
            “{q}”
            <button
              className="remove-btn"
              onClick={() => removeFavorite(q)}
            >
              ❌ Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
