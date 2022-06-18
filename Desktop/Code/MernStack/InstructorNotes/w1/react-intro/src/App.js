import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* 
      Using the component's tag is doing: 
      new Counter({title: "the title", count: 10}) */}
      <Counter title="Confusions" />
      <Counter title="Successes" count={10} increment={5} />
    </div>
  );
}

export default App;
