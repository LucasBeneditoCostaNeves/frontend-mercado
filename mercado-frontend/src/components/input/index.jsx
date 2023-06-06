import React from "react";

export const Input = ({ label, type, placeholder, register, msgerror }) => {
  return (
    <div className="input-component">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      <span>{msgerror}</span>
    </div>
  );
};
