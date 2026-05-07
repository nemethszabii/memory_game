import "../styles/card.css";

const Card = ({ content, isFlipped, onClick }) => {
  return (
    <div onClick={onClick} className={`card ${!isFlipped ? "flipped" : ""}`}>
      {isFlipped ? content : "?"}
    </div>
  );
};

export default Card;
