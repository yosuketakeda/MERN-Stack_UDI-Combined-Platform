import React from "react";
import { connect } from "react-redux";
import Header from "../Dashboard/Header";

const TeamChat = ({ accounts, managers, totalAccounts, ...props }) => {
  return (
    <div className="dashboard managers">
      <Header title="Team Chat" subTitle="TeamChat"></Header>

      <div className="managers-container">
        <div className="table-header position-absolute">
          <div className="table-name"></div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state, "ishere on mapStateToProps on TeamChat");
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch, "is here on mapDispatchToProps on TeamChat");
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamChat);
