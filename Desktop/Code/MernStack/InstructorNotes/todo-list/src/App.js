import React, { useState } from "react";

import "./App.css";

import Item from "./components/Item";
import Items from "./components/Items";
import NewItemForm from "./components/NewItemForm";

function App() {
  const [items, setItems] = useState([]);

  const addNewItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemDelete = (itemToDel) => {
    const filteredItems = items.filter((item) => {
      return itemToDel !== item;
    });

    setItems(filteredItems);
  };

  const handleItemChecked = (event, itemToUpdate) => {
    const updatedItems = items.map((item) => {
      if (item === itemToUpdate) {
        const copiedItem = { ...item };
        copiedItem.complete = event.target.checked;
        return copiedItem;
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <div className="App">
      <NewItemForm addNewItem={addNewItem} />
      <hr />

      <Items
        items={items}
        handleItemChecked={handleItemChecked}
        handleItemDelete={handleItemDelete}
      />
    </div>
  );
}

export default App;
