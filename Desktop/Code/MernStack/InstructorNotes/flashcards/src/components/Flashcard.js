const Flashcard = (props) => {
  return (
    <section
      className="card"
      onClick={(event) => {
        props.handleFlipCardClick(event, props.index);
      }}
    >
      <h3>{props.card.category}</h3>
      {/* ternary syntax - condition ? "returned if true" : "returned if false" */}
      {props.card.flipped ? (
        <p className="back">{props.card.correct_answer}</p>
      ) : (
        <p className="front">{props.card.question}</p>
      )}

      <button
        onClick={(event) => {
          props.handleDelete(event, props.index);
        }}
      >
        Delete
      </button>
    </section>
  );
};

export default Flashcard;
