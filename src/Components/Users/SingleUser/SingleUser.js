import s from "./SingleUser.module.css";
import { NavLink } from "react-router-dom";

const SingleUser = (props) => {
  let path = "/chat/" + props.id;
  return (
    <div
      className={s.singleUserWrapper}
      onClick={() => props.setCurrentChat(props.name, props.messages, props.id)}
    >
      <NavLink to={path} activeClassName={s.active}>
        <div>
          <div className={s.itemWrapper}>
            <div className={s.item}>
              <div className={s.name}>{props.name}</div>
              <div className={s.dateWrapper}>
                <div>{props.date}</div>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.lastMessage}>{props.lastMessage}</div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default SingleUser;
