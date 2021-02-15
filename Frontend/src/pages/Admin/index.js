import React, { useState } from "react";
import { connect } from "react-redux";
// import { withRouter } from 'react-router-dom';
import Header from "../Dashboard/Header";
import HorizontalTab from "./HorizontalTab";
// Admin Components
import Users from "./Users";
import Settings from "./Settings";

const Admin = (props) => {
  const [activeTab, setActiveTab] = useState("Users");

  const roleId = window.localStorage.getItem("roleId");

  if (roleId > 4) {
    props.history.push("/dashboard");
  }

  const getActiveTabContent = () => {
    if (activeTab === "Users") {
      return <Users />;
    } else if (activeTab === "Settings") {
      return <Settings />;
    }
  };

  const getActiveTabHeader = () => {
    if (activeTab === "Users") {
      return <Header title="Admin" type="AdminUsers" />;
    } else if (activeTab === "Settings") {
      return <Header title="Admin" type="AdminSettings" />;
    }
  };

  const masterAdminTab = ["Users", "Settings"];

  return (
    <div className="dashboard revenue-insights">
      <div>
        {getActiveTabHeader()}
        {roleId < 3 ? (
          <HorizontalTab
            tabs={masterAdminTab}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ) : (
          <></>
        )}
      </div>
      {getActiveTabContent()}
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, null)(Admin);
