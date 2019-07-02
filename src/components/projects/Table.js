import React from "react";
import moment from "moment";

const Table = ({ interns }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>Job</th>
            <th>Applied At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interns &&
            interns.map(intern => {
              return (
                <tr key={intern.id}>
                  <td>{intern.studentName}</td>
                  <td>{intern.companyName}</td>
                  <td>{intern.job}</td>
                  <td>{moment(intern.appliedAt.toDate()).format("lll")}</td>
                  <td> {intern.status}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
