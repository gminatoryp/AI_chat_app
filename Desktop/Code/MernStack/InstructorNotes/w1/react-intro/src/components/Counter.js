import React from "react";

class Counter extends React.Component {
  /**
   * Constructs a new instance of Counter component. The constructor
   * function is executed every time the <Counter /> tag is used.
   * @param {Object} props These are the attributes on the <Counter /> tag
   *    that are converted into an object of key value pairs with the same
   *    names.
   */
  constructor(props) {
    /* 
    Call the parent constructor (the React.Component constructor) and pass
    this components properties to it so it can SUPERvise us.
    */
    super(props);
    console.log("props", props);

    /* 
    props vs state? Props are the attributes passed in on the component's tag:
    <Counter count={0} title="Bug counter" />
    Props are the starting values passed in. State is any data for the
    component that can change. If a prop needs to change, add it to state.
    */
    this.state = {
      count: props.count || 0,
    };

    console.log("state", this.state);
  }

  handleCountClick() {
    this.setState({
      count: this.state.count + (this.props.increment || 1),
    });
  }

  render() {
    const styles = {
      border: "1px solid gray",
      padding: "10px",
      marginRight: "10px",
      display: "inline-block",
    };

    return (
      <div style={styles}>
        <h2>{this.props.title}</h2>
        <button
          onClick={(event) => {
            this.handleCountClick();
          }}
        >
          Count: {this.state.count}
        </button>
      </div>
    );
  }
}

export default Counter;
