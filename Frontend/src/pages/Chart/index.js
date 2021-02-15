import React from "react";
import { connect } from "react-redux";
import Header from "../Dashboard/Header";
import Overview from "./Overview";

const Chart = (props) => {
  const { full_table_view } = props;

  const getContent = () => {
    return <Overview full_table_view={full_table_view} />;
  };

  return (
    <div className="dashboard revenue-insights">
      {!full_table_view && (
        <Header title="Processing" subTitle="Chart" type="processing" />
      )}
      {getContent()}
    </div>
  );
};

function mapStateToProps(state) {}

function mapDispatchToProps(dispatch) {}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
