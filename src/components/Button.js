import React, { useState } from "react";
import "../styles/button.css";

const Button = (props) => {
  const [tiklandi, setTiklandi] = useState(false);
  console.log(props);
  console.log("tıklandı", tiklandi);
  return (
    <div>
      {props.type === "primary" && (
        <button
          className={props.type}
          onClick={() => {
            setTiklandi(true);
          }}
        >
          {tiklandi === true ? "TIKLA BANA" : props.buttonText}
        </button>
      )}
      {props.type === "secondary" && (
        <button className="secondary" onClick={props.tkla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "danger" && (
        <button className={props.type} onClick={props.tkla}>
          {props.buttonText}
        </button>
      )}
      {props.type === "success" && (
        <button className={props.type} onClick={props.tkla}>
          {props.buttonText}
        </button>
      )}
    </div>
  );
};

export default Button;
