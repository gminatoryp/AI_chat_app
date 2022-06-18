import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const EditMessage = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [primaryCategory, setPrimaryCategory] = useState("");
  const [secondaryCategory, setSecondaryCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  /* 
  Empty arr as second argument means this will only happen on the first render
  of this component.

  Get the current data from DB to pre-fill input boxes.
  */
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/messages/" + props.id)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setPrimaryCategory(res.data.primaryCategory);
        setSecondaryCategory(res.data.secondaryCategory);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

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
      .put("http://localhost:8000/api/messages/" + props.id, newMessage)
      .then((res) => {
        navigate("/messages/" + props.id);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
          <input
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            type="text"
            value={title}
          />
        </div>

        <div>
          <label>Content: </label>
          <input
            onChange={(event) => {
              setContent(event.target.value);
            }}
            type="text"
            value={content}
          />
        </div>

        <div>
          <label>Primary Category: </label>
          <input
            onChange={(event) => {
              setPrimaryCategory(event.target.value);
            }}
            type="text"
            value={primaryCategory}
          />
        </div>

        <div>
          <label>Secondary Category: </label>
          <input
            onChange={(event) => {
              setSecondaryCategory(event.target.value);
            }}
            type="text"
            value={secondaryCategory}
          />
        </div>

        <div>
          <label>Image Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            value={imgUrl}
          />
        </div>

        <button>Update</button>
      </form>
    </div>
  );
};

export default EditMessage;
