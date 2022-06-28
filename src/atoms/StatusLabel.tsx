import "./Atoms.css";

type propsType = {
  status: boolean;
};

export const StatusLabel = (props: propsType) => {
  return (
    <label className="StatusLabel">
      {props.status === true ? "success" : "loading..."}
    </label>
  );
};
