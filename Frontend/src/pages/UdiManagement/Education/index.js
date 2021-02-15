import React from "react";
import { connect } from "react-redux";
import Header from "../../Dashboard/Header";

const Education = ({ accounts, managers, totalAccounts, ...props }) => {
  return (
    <div className="dashboard managers">
      <Header title="UDI Management" subTitle="Education"></Header>

      <div className="managers-container">
        <div className="table-header position-absolute">
          <div className="table-name"></div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state, "is here on education mapstateToprops");
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch, "is here on education mapdispatchToProps");
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
