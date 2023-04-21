import { useState, useRef, FC, MouseEvent } from "react";
import styles from "./Card.module.css";

interface CardProps {
  frontContent: React.ReactNode;
  backContent?: React.ReactNode | null;
}

const Card: FC<CardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const labelText = isFlipped
    ? "Showing the back side of the card."
    : "Showing the front side of the card.";

  const buttonLabelText = isFlipped
    ? "Click to see the contents of the front of the card."
    : "Click to see the contents of the back of the card.";

  const handleFlip = (event: MouseEvent<HTMLButtonElement>) => {
    if (!backContent) return;

    const newState = !isFlipped;
    setIsFlipped(newState);

    cardRef.current?.focus();
  };

  return (
    <div className={styles["card-container"]}>
      <div
        className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
        role="group"
        aria-label={labelText}
        tabIndex={0}
        ref={cardRef}
      >
        <div
          className={`${styles["card-side"]} ${styles.front}`}
          aria-hidden={isFlipped}
        >
          {frontContent}
        </div>
        <div
          className={`${styles["card-side"]} ${styles.back}`}
          aria-hidden={!isFlipped}
        >
          {backContent}
        </div>
      </div>
      {backContent && (
        <div className={styles["button-container"]}>
          <button
            className={styles["flip-button"]}
            onClick={handleFlip}
            aria-pressed={isFlipped}
            aria-label={buttonLabelText}
            tabIndex={0}
          >
            Flip the card
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
