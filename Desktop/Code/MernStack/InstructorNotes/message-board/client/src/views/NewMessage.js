import React, { useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const NewMessages = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = {
      title: title,
      content: content,
      primaryCategory: primaryCategory,
      secondaryCategory: secondaryCategory,
      imgUrl: imgUrl,
    };

    axios
      .post("http://localhost:8000/api/messages", newMessage)
      .then((res) => {
        navigate("/messages");
        console.log(res);
      })
      .catch((err) => {
        /* 
        For validation errors to be caught here, you need
        res.status(400).json(err) in the controller.

        To get validation errors for the edit form, you can do the same as this
        including the conditional rendering below.
        */
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div>
          <label>Title: </label>
          {errors?.title && (
            <span style={{ color: "red" }}>{errors?.title?.message}</span>
          )}
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Content: </label>
          {errors?.content && (
            <span style={{ color: "red" }}>{errors?.content?.message}</span>
          )}
          <input
            onChange={(event) => {
              setContent(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Primary Category: </label>
          {errors?.primaryCategory && (
            <span style={{ color: "red" }}>
              {errors?.primaryCategory?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setPrimaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Secondary Category: </label>
          {errors?.secondaryCategory && (
            <span style={{ color: "red" }}>
              {errors?.secondaryCategory?.message}
            </span>
          )}
          <input
            onChange={(event) => {
              setSecondaryCategory(event.target.value);
            }}
            type="text"
          />
        </div>

        <div>
          <label>Image Url: </label>
          {errors?.imgUrl && (
            <span style={{ color: "red" }}>{errors?.imgUrl?.message}</span>
          )}
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewMessages;
