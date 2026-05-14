import "../styles/card.css";

const Card = ({ content, isFlipped, onClick, flipCounter }) => {
  return (
    <div
      onClick={onClick}
      className={isFlipped || flipCounter == 2 ? "flipped" : "card"}
    >
      {isFlipped ? content : "?"}
    </div>
  );
};

export default Card;
