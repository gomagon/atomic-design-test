import { HomeTemplates } from "../templates/HomeTemplates";
import { userType } from "../common/UserType";
import { ChangeEvent, useState } from "react";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const Home = () => {
  const [status, setStatus] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [users, setUsers] = useState<userType[]>([]);

  const getButtonFunc = () => {
    //inputの解析、id抽出
    const values = inputValue.split(",");
    let str = "";
    values.forEach((val) => {
      if (Number(val) >= 1 && Number(val) <= 10) {
        if (str[0] !== "?") {
          str += "?id=" + Number(val);
        } else {
          str += "&id=" + Number(val);
        }
      }
    });

    console.log(BASE_URL + str);

    const client = axios.create({
      baseURL: BASE_URL + str,
    });

    async function _axios() {
      //loading...を表示
      setStatus(false);

      await client
        .get<userType[]>(``)
        .then((response) => {
          setStatus(true);
          if (response.data) {
            setUsers(response.data);
          }
        })
        .catch((error) => {
          setStatus(true);
          console.log(error);
        });
    }

    _axios();
  };

  const inputChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="HomeTemplates">
      <HomeTemplates
        getButtonFunc={getButtonFunc}
        inputValue={inputValue}
        inputChangeFunc={inputChangeFunc}
        status={status}
        users={users}
      />
    </div>
  );
};
