import s from "./ChatPage.module.css";
import { required } from "../FormValidate/FormValidate";
import { reduxForm, Field, reset } from "redux-form";
import sendMessage from "../../Images/sendMessage.png";
const ChatPage = (props) => {
  const addSms = (value, dispatch) => {
    const date = new Date().toLocaleTimeString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    const userDate = new Date().toLocaleDateString().split(",")[0];
    props.getJokesThunk(date, props.currentId, userDate);
    props.addSms(value.chatText, props.currentId, date, userDate);
    dispatch(reset("chatForm"));
  };

  const userData = props.users.usersData[props.currentId - 1].messages;
  const message = userData.map((m) => {
    if (!m.mine) {
      return (
        <div className={s.wrapper}>
          <div className={s.userMessage}>{m.message}</div>
          <div className={s.date}>{m.date}</div>
        </div>
      );
    } else {
      return (
        <div className={s.Mywrapper}>
          <div className={s.MyMessage}>{m.message}</div>
          <div className={s.date}>{m.date}</div>
        </div>
      );
    }
  });
  return (
    <div className={s.chatPageWrapper}>
      <div className={s.header}>
        <div className={s.headerName}>{props.currentName}</div>
      </div>
      <div>
        <div>{message}</div>
      </div>
      <div>
        <div className={s.formWrapper}>
          <ChatReduxForm onSubmit={addSms} />
        </div>
      </div>
    </div>
  );
};

const ChatForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formDesign}>
        <Field
          validate={[required]}
          component={"textarea"}
          name={"chatText"}
          placeholder="Type your message"
        />
        <span>
          <button>
            <img src={sendMessage} width="35px" />
          </button>
        </span>
      </div>
    </form>
  );
};
const ChatReduxForm = reduxForm({ form: "chatForm" })(ChatForm);

export default ChatPage;
