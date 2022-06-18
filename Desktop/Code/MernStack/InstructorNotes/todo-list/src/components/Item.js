const Item = (props) => {
  const titleClasses = [];

  if (props.item.complete) {
    titleClasses.push("line-through");
  }

  return (
    <div>
      <span className={titleClasses.join(" ")}>{props.item.title}</span>
      <input
        onChange={(event) => {
          props.handleItemChecked(event, props.item);
        }}
        type="checkbox"
      />
      <button
        onClick={(event) => {
          props.handleItemDelete(props.item);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
