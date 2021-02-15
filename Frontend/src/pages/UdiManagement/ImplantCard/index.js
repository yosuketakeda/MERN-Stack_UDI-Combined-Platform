import React from "react";
import { connect } from "react-redux";
import Header from "../../Dashboard/Header";

const ImplantCard = ({ accounts, managers, totalAccounts, ...props }) => {
  return (
    <div className="dashboard managers">
      <Header title="UDI Management" subTitle="Implant Card"></Header>

      <div className="managers-container">
        <div className="table-header position-absolute">
          <div className="table-name"></div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state, "is here mapstateToProps on implantCard");
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch, "is here mapDispatchToProps");
}

export default connect(mapStateToProps, mapDispatchToProps)(ImplantCard);
