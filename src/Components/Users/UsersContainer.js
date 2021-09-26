import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import { setCurrentChat } from "../../Redux/usersReducer";

const UsersContainer = (props) => {
  return <Users {...props} />;
};
const mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
  };
};
export default compose(connect(mapStateToProps, { setCurrentChat }))(
  UsersContainer
);
