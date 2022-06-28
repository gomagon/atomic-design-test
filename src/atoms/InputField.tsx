import { ChangeEvent } from "react";
import "./Atoms.css";

type propsType = {
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = (props: propsType) => {
  return (
    <input
      className="InputField"
      onChange={props.inputChangeFunc}
      value={props.inputValue}
    />
  );
};
