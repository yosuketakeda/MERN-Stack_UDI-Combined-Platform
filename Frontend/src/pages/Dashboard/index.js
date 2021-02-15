import React, { useState } from "react";
import StatCard from "../../components/StatCard";
import { CustomBarChart } from "../../components/BarChart";

import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import Header from "./Header";
import { AM_period_chart } from "../../utils/Utils";

const Dashboard = () => {
  let mainValue = "0";

  let colorBarStack = ["#333", "#626060", "#777", "#8c8686", "#a79d9d"];

  let loggedInUser = localStorage.getItem("username");
  const [date, setDate] = useState({
    startDate: null,
    endDate: null,
    focusedInput: null,
  });
  let firstName = loggedInUser ? loggedInUser.split(" ") : "-";

  return (
    <div className="dashboard">
      <Header
        title="Welcome home,"
        subTitle={firstName.length && firstName[0]}
        date={date}
        setDate={setDate}
      />

      <div className="dashboard__statsGrid">
        <StatCard title="Sellers" main={mainValue} grid={1} />
        <StatCard title="More Cards" main={mainValue} grid={2} />
        <StatCard title="More Cards" main={mainValue} grid={3} />
        <StatCard title="More Cards" main={mainValue} grid={4} />
      </div>
      <CustomBarChart
        height={370}
        format={{
          format: "",
          position: "left",
          slice: 1,
          singleBar: true,
        }}
        colors={colorBarStack}
        data={AM_period_chart}
      />
    </div>
  );
};

export default Dashboard;
