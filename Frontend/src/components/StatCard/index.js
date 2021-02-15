import React from "react";
import { connect } from "react-redux";

const StatCard = (props) => {
  let main = props.main;
  let bottom = props.bottom;
  let page = props.page;

  if (page === "revenue-management") {
    return (
      <div className="statcard" style={{ gridArea: `card-${props.grid}` }}>
        <p className="statcard__title">{props.title}</p>
        <p className="statcard__main">{main}</p>
        <div className="statcard__bottom">
          <p>{bottom}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="statcard" style={{ gridArea: `card-${props.grid}` }}>
        <p className="statcard__title">{props.title}</p>
        <p className="statcard__main">{main}</p>
        <div className="statcard__bottom"></div>
      </div>
    );
  }
};

const mapDispatchToProps = () => ({});

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StatCard);
