import React, { useState } from "react";

const Form = (props) => {
  console.log("PROPS", props);
  //console.log("form props",props);

  const [inputValue, setInputValue] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue === "" || inputSurname === "") {
      alert("All fields are required");
      return;
    }
    props.setUsername(inputValue + "  " + inputSurname);
    console.log(inputValue);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setInputValue(event.target.value);
        }}
        value={inputValue}
        placeholder="Username"
      />

      <input
        value={inputSurname}
        onChange={(event) => {
          console.log(event.target.value);
          setInputSurname(event.target.value);
        }}
        placeholder="Surname"
      />

      <button type="submit">Save</button>
    </form>
  );
};
export default Form;
