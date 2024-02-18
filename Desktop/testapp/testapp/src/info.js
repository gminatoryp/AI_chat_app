// Ternary operator code 
const App = () => {
  const name = 'george'

  // create ternary expression
  const isNameShowing = false

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name: "No name is chosen" }</h1>
      {name ? (
        <>
        <h1>{name}</h1>
        </>
      ) : (
        <>
        <h1>Second option</h1>
        <h2>Addition info</h2>
        </>
      )}
    </div>
  );
}


// Props code
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