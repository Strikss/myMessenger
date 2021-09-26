import s from "./Users.module.css";
import SingleUser from "./SingleUser/SingleUser";
import { useState } from "react";
import profileImg from "../../Images/profileImg.png";
import search from "../../Images/search.png";

const Users = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = (e) => {
    const searchText = e.target.value;
    return setSearchTerm(searchText);
  };
  const user = props.users
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
    })
    .sort(function (a, b) {
      let first = a.date.split("/").reverse().join("");
      let second = b.date.split("/").reverse().join("");
      return first > second ? -1 : first < second ? 1 : 0;
    })
    .map((u) => {
      return (
        <SingleUser
          name={u.name}
          id={u.id}
          lastMessage={u.lastMessage}
          date={u.date}
          setCurrentChat={props.setCurrentChat}
          messages={u.messages}
        />
      );
    });
  return (
    <div className={s.usersWrapper}>
      <div className={s.item}>
        <img className={s.profileImage} src={profileImg} />
        <div className={s.inputBox}>
          <img src={search} width="24px" />
          <input
            type="search"
            results="0"
            placeholder="Search or start new chat"
            onChange={(e) => onChange(e)}
          />
        </div>
      </div>
      <div className={s.item} onClick={() => setSearchTerm("")}>
        <h3>Chats</h3>

        <div className={s.user}>{user}</div>
      </div>
    </div>
  );
};

export default Users;
