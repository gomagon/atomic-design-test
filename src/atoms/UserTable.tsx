import "./Atoms.css";
import { userType } from "../common/UserType";

type propsType = {
  users: userType[];
};

export const UserTable = (props: propsType) => {
  return (
    <table className="UserTable">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((val: userType) => (
          <tr key={val.id}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td>{val.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
