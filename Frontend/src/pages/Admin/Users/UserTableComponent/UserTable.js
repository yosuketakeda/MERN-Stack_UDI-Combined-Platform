import React from "react";
import PopoverItem from "../PopOverComponent/PopOverComponent";

const UserTable = (props) => {
  const page = props.page; // page number
  const noOfDatasInTable = props.noOfDatasInTable;

  const header = props.header[0];
  let keys = Object.keys(header);

  let datas = props.data;
  let ndata = datas;
  const dataInTable = ndata.slice(
    page * noOfDatasInTable,
    page * noOfDatasInTable + noOfDatasInTable
  );

  return (
    <table className="UserTable">
      <thead>
        <tr>
          {keys.map((key) => (
            <th key={key}>
              <button type="button" onClick={() => {}}>
                {header[key]}
              </button>
            </th>
          ))}
          <th>OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        {dataInTable.map((item) => (
          <tr key={item.id}>
            <td>
              <div>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="18" fill="black" />
                </svg>
                <span>{item.name}</span>
              </div>
            </td>
            <td>{item.email}</td>
            <td>{item.date}</td>
            <td>
              <PopoverItem key={item.id} placement="left" id={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
