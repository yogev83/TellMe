import React from "react";

export function SpeakerRating({ rating, id }) {
  const stars = React.useMemo(() => {
    let elements = [];
    for (let i = 0; i < 5; i++) {
      elements.push(
        <span key={i} className={rating >= i + 1 ? "checked" : ""}>
          ☆
        </span>
      );
    }
    return elements;
  }, [rating]);

  return (
    <div className="speakerRating">
      <span>Rating:</span>
      <span>
        <div className="rating">{stars}</div>
      </span>
    </div>
  );
}
