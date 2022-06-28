import "./Atoms.css";

type propsType = {
  getButtonFunc: () => void;
};

export const GetButton = (props: propsType) => {
  return (
    <button className="GetButton" onClick={props.getButtonFunc}>
      Get
    </button>
  );
};
