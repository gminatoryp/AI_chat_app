import Flashcard from "./Flashcard";

const Flashcards = (props) => {
  return props.flashcards.map((card, i) => {
    return (
      <Flashcard
        key={i}
        index={i}
        card={card}
        handleFlipCardClick={props.handleFlipCardClick}
        handleDelete={props.handleDelete}
      />
    );
  });
};

export default Flashcards;
