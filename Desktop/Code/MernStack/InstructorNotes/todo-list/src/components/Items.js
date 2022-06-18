import Item from "./Item";

const Items = (props) => {
  return props.items.map((item, i) => {
    return (
      <Item
        key={i}
        item={item}
        handleItemChecked={props.handleItemChecked}
        handleItemDelete={props.handleItemDelete}
      />
    );
  });
};

export default Items;
