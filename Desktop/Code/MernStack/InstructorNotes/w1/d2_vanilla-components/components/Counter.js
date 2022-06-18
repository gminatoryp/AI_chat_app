/**
 * @typedef {Object} Props
 * @property {string} headingText The title for the counter.
 * @property {string} buttonText The text for the counter's button.
 * @property {number} [count] Optional starting count value.
 */

/**
 * A class to represent a counter component. When instantiated, it renders
 * a new counter to the page.
 */
class Counter {
  /**
   * The constructor method is executed when the new keyword is used with the
   * class name.
   * @param {Props} props Contains the properties, aka Key Value Pairs (KVP)
   *    the new Counter, such as header text, starting count, etc.
   * @param {Object} parentNode HTML node that the new Counter component will
   *    be appended into.
   * @returns {Counter} The newly constructed (instantiated) Counter.
   */
  constructor(props, parentNode) {
    // Uses props.count, if it doesn't exist will use 0
    this.count = props.count || 0;

    /* 
    Creates a div HTML node, which we can now interact with as if we selected
    it from the page, but it's not yet appended to the page.
    */
    const container = document.createElement("div");

    container.style.border = "1px solid gray";
    container.style.padding = "10px";
    container.style.display = "inline-block";

    const heading = document.createElement("h2");
    heading.innerText = props.headingText + " Counter";
    container.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerText = `Current count: ${this.count}`;
    container.appendChild(paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", (event) => {
      this.count++;
      paragraph.innerText = `Current count: ${this.count}`;
    });
    container.appendChild(btn);

    parentNode.appendChild(container);
  }
}

export default Counter;
