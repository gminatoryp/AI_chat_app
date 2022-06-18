/* 
Destructure the useEffect and useState methods (hooks) from the imported react
object. We could simply do React.useState(), but destructing removes the React.
repetition and makes it clearer what parts of React we are using.
*/
import React, { useEffect, useState } from "react";

import axios from "axios";

import "./App.css";
import flashcardsData from "./flashcards.json";

import FormResults from "./components/FormResults";
import Flashcards from "./components/Flashcards";

function App() {
  // Define each piece of state like this one by one.
  /* 
  useState function call returns an array of 2 items. Those two items are
  destructured into two variables to the left of the equals sign.

  The first item is the state variable which contains the current state value,
  or the starting value that was passed in to useState if it has not been
  changed yet.

  The second item is a function that is used to update the state variable.
  DO NOT update the state variable directly, we must update it with the
  function react gave us so that react can react properly to the state
  being updated and re-render the page for us to display the changed data.
  */
  const [flashcards, setFlashcards] = useState([]);

  const [topic, setTopic] = useState("");
  const [topicErr, setTopicErr] = useState("");

  const [front, setFront] = useState("");
  const [frontErr, setFrontErr] = useState("");

  const [back, setBack] = useState("");
  const [backErr, setBackErr] = useState("");

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=20&category=18&type=boolean")
      .then((resp) => {
        // console.log("API response:", resp);
        setFlashcards(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFlipCardClick = (event, selectedIdx) => {
    const updatedCards = flashcards.map((card, i) => {
      if (i === selectedIdx) {
        // !Reverse the flipped boolean to flip/un-flip.
        card.flipped = !card.flipped;
      }
      return card;
    });

    // console.log(updatedCards);

    /* 
    When your state is an object or an array, the set function MUST be given
    a NEW object / array or else it won't re-render the page. DO NOT change
    the state directly, it will not update.
    */
    setFlashcards(updatedCards);
  };

  const handleNewFlashcardSubmit = (event) => {
    event.preventDefault(); // prevent default page refresh on form submit.

    if (topicErr || frontErr || backErr) {
      return;
    }

    const newFlashcard = {
      // long-form - key: value
      category: topic, // topic key is set to the value of the topic state var.
      question: front,
      correct_answer: back,
    };

    // Create a new array containing all the existing items, plus the new one at the end.
    setFlashcards([...flashcards, newFlashcard]);

    // Clear form inputs, this requires adding the state into the input's value attribute.
    setTopic("");
    setFront("");
    setBack("");
  };

  const handleDelete = (e, delIdx) => {
    // This stops the onClick from skipping this function and going to the
    // card onClick.
    e.stopPropagation();
    const filteredFlashcards = flashcards.filter((card, i) => {
      /* 
      return true to keep, false to remove.
      returns true for all of the cards except the delIdx one.
      */
      return delIdx !== i;
    });

    setFlashcards(filteredFlashcards);
  };

  // Warning: Advanced!
  const validateFormFields = (event) => {
    // Put name and value into vars from event.target.
    const { name, value } = event.target;

    const inputValidationTable = {
      topic: {
        setErr: setTopicErr,
        minlength: 2,
      },
      front: {
        setErr: setFrontErr,
        minlength: 3,
      },
      back: {
        setErr: setBackErr,
        minlength: 2,
      },
    };

    // Put the appropriate setErr and minlength into vars based on the table.
    const { setErr, minlength } = inputValidationTable[name];

    if (value.length < minlength) {
      setErr(`${name} must be at least ${minlength} characters.`);
    } else {
      setErr("");
    }
  };

  return (
    <div className="container">
      <header>
        <h1 style={{ textAlign: "center" }}>Programming Flashcards</h1>
        <hr />
      </header>

      <form
        onSubmit={(event) => {
          handleNewFlashcardSubmit(event);
        }}
      >
        <div>
          <label>Topic: </label>
          {topicErr && <span className="text-danger">{topicErr}</span>}
          <input
            onChange={(event) => {
              // The target of the event is the input box.
              setTopic(event.target.value);
              validateFormFields(event);
            }}
            type="text"
            value={topic}
            name="topic"
          />
        </div>

        <div>
          <label>Front: </label>
          {frontErr && <span className="text-danger">{frontErr}</span>}
          <input
            onChange={(event) => {
              setFront(event.target.value);
              validateFormFields(event);
            }}
            type="text"
            value={front}
            name="front"
          />
        </div>

        <div>
          <label>Back: </label>
          {backErr && <span className="text-danger">{backErr}</span>}
          <input
            onChange={(event) => {
              setBack(event.target.value);
              validateFormFields(event);
            }}
            type="text"
            value={back}
            name="back"
          />
        </div>
        <button>Add</button>
      </form>

      <FormResults topic={topic} front={front} back={back} />
      <hr />

      <main className="flex-row flex-wrap">
        <Flashcards
          flashcards={flashcards}
          handleFlipCardClick={handleFlipCardClick}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
