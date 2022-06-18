import React, { useState } from "react";

const NewItemForm = (props) => {
  const [title, setTitle] = useState("");

  const handleItemSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      title: title,
      complete: false,
    };

    setTitle("");
    props.addNewItem(newItem);
  };

  return (
    <form
      onSubmit={(event) => {
        handleItemSubmit(event);
      }}
    >
      <div>
        <label>Name: </label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          value={title}
        />
      </div>

      <button>Add</button>
    </form>
  );
};

export default NewItemForm;
