import React from "react";
import { connect } from "react-redux";
import Header from "../Dashboard/Header";
import Overview from "./OverView";

const SellerTable = () => {
  const getContent = () => {
    return <Overview />;
  };

  const getHeader = () => {
    return (
      <Header title="Processing" subTitle="Seller Table" type="processing" />
    );
  };
  return (
    <div className="dashboard revenue-insights">
      {getHeader()}
      {getContent()}
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(SellerTable);
