import "./Templates.css";
import { HeaderArea } from "../organisms/HeaderArea";
import { UserTable } from "../atoms/UserTable";
import { userType } from "../common/UserType";
import { ChangeEvent } from "react";

type propsType = {
  status: boolean;
  getButtonFunc: () => void;
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
  users: userType[];
};

export const HomeTemplates = (props: propsType) => {
  return (
    <div className="HomeTemplates">
      <HeaderArea
        getButtonFunc={props.getButtonFunc}
        inputValue={props.inputValue}
        inputChangeFunc={props.inputChangeFunc}
        status={props.status}
      />
      <UserTable users={props.users} />
    </div>
  );
};
