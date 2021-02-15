export const handleErrorResponseObject = (error) => {
  console.log("resonse error", error);
  if (error.response && error.response.data.error) {
    throw new Error(error.response.data.error);
  } else if (error.response) {
    throw new Error(error.response.statusText);
  } else {
    throw new Error(error.message);
  }
};

export const handleTryErrorResonseObject = (error) => {
  if (error.response && error.response.data) {
    throw new Error(error.response.data.message);
  } else {
    throw new Error(error.response.statusText);
  }
};

export const dataTable = [
  [
    "NorthWest Co.",
    "Pam Beesley",
    "24m",
    "7/12 Active Users",
    "$734",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Southwest Co.",
    "Michael Scott",
    "14h 51m",
    "4/6 Active Users",
    "$78,712",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Winery. Inc",
    "Kevin Malone",
    "36h 12m",
    "8/16 Active Users",
    "$107,568",
    "Mid",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Snickers Ltd.",
    "Angela Martin",
    "18h 41m",
    "24/54 Active Users",
    "$3,093,992",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Balenciaga Co.",
    "Andrew Bernard",
    "82h 11m",
    "14/79 Active Users",
    "$490,213",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Bose",
    "Dwighit Schrute",
    "8h 58m",
    "6/8 Active Users",
    "$55,976",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Leafers Ltd.",
    "Jim Halpert",
    "102h 46m",
    "45/84 Inactive Users",
    "$734",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "NorthWest Co.",
    "Pam Beesley",
    "24m",
    "7/12 Active Users",
    "$734",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Southwest Co.",
    "Michael Scott",
    "14h 51m",
    "4/6 Active Users",
    "$78,712",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Winery. Inc",
    "Kevin Malone",
    "36h 12m",
    "8/16 Active Users",
    "$107,568",
    "Mid",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Snickers Ltd.",
    "Angela Martin",
    "18h 41m",
    "24/54 Active Users",
    "$3,093,992",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Balenciaga Co.",
    "Andrew Bernard",
    "82h 11m",
    "14/79 Active Users",
    "$490,213",
    "Enterprise",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Bose",
    "Dwighit Schrute",
    "8h 58m",
    "6/8 Active Users",
    "$55,976",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
  [
    "Leafers Ltd.",
    "Jim Halpert",
    "102h 46m",
    "45/84 Inactive Users",
    "$734",
    "SMB",
    "16 Jun, 2020",
    "-120",
  ],
];
export const AM_period_chart = [
  {
    month: "Jan",
    value: 320,
    PercentageShow: "1000%",
  },
  {
    month: "Fed",
    value: 250,
    PercentageShow: "10%",
  },
  {
    month: "Mar",
    value: 310,
    PercentageShow: "23%",
  },
  {
    month: "Apr",
    value: 290,
    PercentageShow: "48%",
  },
  {
    month: "May",
    value: 356,
    PercentageShow: "67%",
  },
  {
    month: "Jun",
    value: 190,
    PercentageShow: "75%",
  },
  {
    month: "Jul",
    value: 260,
    PercentageShow: "89%",
  },
  {
    month: "Aug",
    value: 254,
    PercentageShow: "75%",
  },
  {
    month: "Sep",
    value: 358,
    PercentageShow: "92%",
  },
  {
    month: "Oct",
    value: 340,
    PercentageShow: "78%",
  },
  {
    month: "Nov",
    value: 290,
    PercentageShow: "56%",
  },
  {
    month: "Dec",
    value: 200,
    PercentageShow: "23%",
  },
];
