import React, { useContext } from "react";
import img from "../../assents/olho.png";
import { DivStyled } from "./styled";
import { Context } from "../../context/FullContext";

export const Input = ({
  label,
  type,
  placeholder,
  register,
  msgerror,
  image,
}) => {
  const { typePassword, setTypePassword } = useContext(Context);

  const VerifyPasswordInput = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else if (typePassword === "text") {
      setTypePassword("password");
    }
  };

  return (
    <DivStyled className="input-component">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      {image == true && (
        <img className="olho" src={img} onClick={() => VerifyPasswordInput()} />
      )}
      <span>{msgerror}</span>
    </DivStyled>
  );
};
