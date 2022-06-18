import React, { useState } from "react";

const SubmittedImages = (props) => {
  const [images, setImages] = useState([]);
  const [url, setUrl] = useState("");
  const [color, setColor] = useState("");

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    // Whenever updating an array in state, must always use a NEW array when setting.

    const imgObj = {
      url: url,
      color: color,
    };

    setImages([...images, imgObj]);

    setUrl("");
    setColor("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleUrlSubmit(e);
        }}
      >
        <div>
          <label>URL: </label>
          <input
            onChange={(e) => {
              setUrl(e.target.value);
            }}
            type="text"
            value={url} // This is needed to clear the input.
          />
        </div>

        <div>
          <label>Color: </label>
          <input
            onChange={(e) => {
              setColor(e.target.value);
            }}
            type="text"
            value={color}
          />
        </div>
        <button>Add</button>
      </form>

      {images.map((imgObj, i) => {
        return (
          <img
            key={i}
            src={imgObj.url}
            style={{
              border: `5px solid ${imgObj.color}`,
            }}
            alt="User Submitted"
            width="600px"
          />
        );
      })}
    </div>
  );
};

export default SubmittedImages;
