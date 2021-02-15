import React from "react";
import { connect } from "react-redux";
import ChartHeader from "../ChartHeader";

const Overview = ({ ...props }) => {
  const { full_table_view } = props;

  const tblContainerClass = full_table_view
    ? "full-table-view contentBlock"
    : "contentBlock";

  return (
    <div className="annual-recurring-revenue">
      {!full_table_view && <ChartHeader />}
      <div className={tblContainerClass}>
        <h3>Chart Content</h3>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
