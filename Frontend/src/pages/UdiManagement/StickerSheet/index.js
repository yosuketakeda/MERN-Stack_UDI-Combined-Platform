import React from "react";
import { connect } from "react-redux";
import Header from "../../Dashboard/Header";

const StickerSheet = ({ accounts, managers, totalAccounts, ...props }) => {
  return (
    <div className="dashboard managers">
      <Header title="UDI Management" subTitle="Sticker Sheet"></Header>

      <div className="managers-container">
        <div className="table-header position-absolute">
          <div className="table-name"></div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(StickerSheet);
