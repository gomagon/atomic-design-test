import "./Molecules.css";
import { GetButton } from "../atoms/GetButton";
import { InputField } from "../atoms/InputField";
import { IdLabel } from "../atoms/IdLabel";
import { ChangeEvent } from "react";

type propsType = {
  getButtonFunc: () => void;
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputArea = (props: propsType) => {
  return (
    <div className="InputArea">
      <IdLabel />
      <div className="InputSubArea">
        <InputField
          inputValue={props.inputValue}
          inputChangeFunc={props.inputChangeFunc}
        />
        <GetButton getButtonFunc={props.getButtonFunc} />
      </div>
    </div>
  );
};
