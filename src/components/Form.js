import React, { useState } from "react";
import { FormData } from "./FormData";
import "../style/card.css";
import { useCardDataContext } from "./DataContext";

export function Form() {

  const {cardData, addCardData, removeCardData} = useCardDataContext()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [img, setImg] = useState();
  // const [cardData, setCardData] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUploadImg = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addCardData({name, email, img})

    setName("");
    setEmail("");
    setImg();
  };

  const handleCardDelete = (index) => {
    removeCardData(index);
  }

  return (
    <div>
      <form className="form-input" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-3">
          <label for="formFileSm" className="form-label">
            Upload your image
          </label>
          <input
            className="form-control form-control-sm"
            id="formFileSm"
            type="file"
            onChange={handleUploadImg}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {cardData.map((data, index) => (
        <FormData
          key={index}
          name={data.name}
          email={data.email}
          img={data.img}
          onDelete={() => handleCardDelete(index)}
        />
      ))}
    </div>
  );
}
