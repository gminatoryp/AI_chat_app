
import './App.css';

//create a component
const Person = (props) => {
  return (
    <>
    <h1> Name: {props.name}</h1>
    <h2> Last name: {props.LastName}</h2>
    <h2> Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'george'} LastName={'park'} age={57}/>
      <Person name='yoon' LastName='gi' age={10+40}/>
    </div>
  );
}

export default App;
