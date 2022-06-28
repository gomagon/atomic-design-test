import "./Organisms.css";
import { InputArea } from "../molecules/InputArea";
import { StatusLabel } from "../atoms/StatusLabel";
import { ChangeEvent } from "react";

type propsType = {
  status: boolean;
  getButtonFunc: () => void;
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const HeaderArea = (props: propsType) => {
  return (
    <div className="HeaderArea">
      <InputArea
        getButtonFunc={props.getButtonFunc}
        inputValue={props.inputValue}
        inputChangeFunc={props.inputChangeFunc}
      />
      <StatusLabel status={props.status} />
    </div>
  );
};
