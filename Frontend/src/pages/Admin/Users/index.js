import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserTable from "./UserTableComponent/UserTable";

import UserService from "./../../../services/UserService";

// Table header and data
const header = [
  {
    name: "FULL NAME",
    email: "E-MAIL ADDRESS",
    date: "CREATE DATE",
  },
];

const Users = (props) => {
  const [usersList, setUsersList] = useState([]);

  const { add_new_user } = props;

  useEffect(() => {
    UserService.getUsersList()
      .then((res) => {
        console.log("response is here", res);
        setUsersList(res.data);
        props.updateState(false, "add_new_user");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }, [add_new_user, props]);

  const noOfDatasInTable = 5;
  console.log("lengith is here", Object.keys(usersList).length);
  const noOfPages = parseInt(Object.keys(usersList).length / noOfDatasInTable);
  const [page, setPage] = useState(0);

  // Table pagination function
  const tablePagination = () => {
    return (
      <div className="pagination" style={{ flex: "auto" }}>
        <div
          className="pagination__prev"
          onClick={() => {
            if (page > 0) {
              setPage(page - 1);
            }
          }}
        >
          Previous
        </div>
        <div className="pagination__pages">
          <ul>
            {Array(noOfPages + 1)
              .fill("")
              .map((d, index) => (
                <li
                  key={index + "sjlk"}
                  className={`pagination__page ${
                    index === page ? `pagination__page--active` : null
                  }`}
                  onClick={() => {
                    setPage(index);
                  }}
                >
                  {index + 1}
                </li>
              ))}
          </ul>
        </div>
        <div
          className="pagination__next"
          onClick={() => {
            if (page < noOfPages) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </div>
      </div>
    );
  };

  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-name">User List</div>
        <div className="panel-toolbar">
          {/* <label>
            <input type="text" name="search" placeholder="Search" />
          </label> */}
          {/* <div className="panel-toolbar-more-menu">
            <PopoverItem key={0} placement="left" id={0} />
          </div> */}
        </div>
      </div>

      <div className="panel-body">
        <UserTable
          header={header}
          data={usersList}
          page={page}
          noOfDatasInTable={noOfDatasInTable}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {tablePagination()}
      </div>
    </div>
  );
};

const mapDispatchToProps = ({ user: { updateState } }) => ({
  updateState: (value, name) => updateState(value, name),
});

const mapStateToProps = ({ user: { add_new_user } }) => ({
  add_new_user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
