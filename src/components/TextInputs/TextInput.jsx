import React, { useState } from "react";
import styled from "styled-components";

const InputComponent = styled.input`
  height: 45px;
  padding-left: 15px;
  font-size: 17px;
  margin-left: 10px;
  width: 100%;
  position: absolute;
`;

export default function TextInput({
  label,
  type,
  placeholder,
  onChange,
  id,
  value,
  name,
}) {
  return (
    <div>
      {label && (
        <label style={{ fontSize: "20px" }} htmlFor={id}>
          {label} :
        </label>
      )}
      <InputComponent
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
