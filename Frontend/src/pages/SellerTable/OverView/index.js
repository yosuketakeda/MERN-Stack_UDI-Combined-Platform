import React, { useState } from "react";
import loadingGif from "../../../assets/gif/loading.gif";
import { connect } from "react-redux";

const OverView = () => {
  // eslint-disable-next-line no-unused-vars
  const [pageLoading, setPageLoading] = useState(false);

  return (
    <div className="annual-recurring-revenue">
      <div className="revenue-insights__statsGrid"></div>
      <div className="contracts-table">
        <div className="table-header position-absolute">
          <div className="table-name">Seller Table</div>
        </div>
        {pageLoading ? (
          <div className="d-flex justify-content-center align-items-center">
            <img className="p-5 m-5" src={loadingGif} alt="spinner" />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OverView);
