import React from "react";
import { Table, Label, Progress, Header } from "semantic-ui-react";

function DustbinTable({ dustbins }) {
  return (
    <>
      <Header as="h3" style={{ marginTop: "30px" }}>
        Dustbin Details
      </Header>
      <Table celled>
        <thead>
          <tr>
            <th>Dustbin ID</th>
            <th>Location</th>
            <th>Fill Level</th>
            <th>Status</th>
            <th>Last Reported</th>
          </tr>
        </thead>
        <tbody>
          {dustbins.map((dustbin) => (
            <tr key={dustbin.id}>
              <td>{dustbin.id}</td>
              <td>{dustbin.location}</td>
              <td>
                <Progress percent={dustbin.fillLevel} indicating progress>
                  {dustbin.fillLevel}% Full
                </Progress>
              </td>
              <td>
                <Label color={dustbin.status === "Active" ? "green" : "red"}>
                  {dustbin.status}
                </Label>
              </td>
              <td>{dustbin.lastReported}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default DustbinTable;
