import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import ChatPage from "./ChatPage";
import { Route } from "react-router";
import { addSms, getJokesThunk } from "../../Redux/usersReducer";
const ChatContainer = (props) => {
  return (
    <Route
      path={"/chat/" + props.currentId}
      render={() => <ChatPage {...props} />}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    currentName: state.users.currentName,
    currentId: state.users.currentId,
    users: state.users,
  };
};
export default compose(connect(mapStateToProps, { addSms, getJokesThunk }))(
  ChatContainer
);
