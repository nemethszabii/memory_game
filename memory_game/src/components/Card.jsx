const Card = ({ content, isFlipped, onClick, flippedCards }) => {
  const isDisabled = isFlipped || flippedCards.length === 2;

  return (
    <div
      onClick={onClick}
      className={`
        flex items-center justify-center text-3xl 
        w-full aspect-square         
        border-2 border-solid rounded-lg 
        transition-all duration-200 
        ${
          isDisabled
            ? "bg-slate-800 border-slate-700 pointer-events-none"
            : "bg-black border-slate-500 hover:bg-gray-800 cursor-pointer shadow-lg"
        }
      `}
    >
      {isFlipped ? content : "?"}
    </div>
  );
};

export default Card;
