import React, { useState } from "react";
import { Header, Segment, Grid, Label, Divider } from "semantic-ui-react";
import DustbinTable from "../components/DustbinTable";
import DustbinForm from "../components/DustbinForm";

function Dashboard() {
  // State to hold dustbin data (example data)
  const [dustbins, setDustbins] = useState([
    {
      id: "#001",
      location: "Park Entrance",
      fillLevel: 75,
      status: "Active",
      lastReported: "1 minute ago",
    },
    {
      id: "#002",
      location: "Market Square",
      fillLevel: 95,
      status: "Needs Attention",
      lastReported: "5 minutes ago",
    },
    {
      id: "#003",
      location: "Community Center",
      fillLevel: 30,
      status: "Active",
      lastReported: "10 minutes ago",
    },
  ]);

  // Handle adding a new dustbin
  const handleAddDustbin = (newDustbinData) => {
    if (newDustbinData.id && newDustbinData.location) {
      // Add new dustbin with default values
      setDustbins([
        ...dustbins,
        {
          ...newDustbinData,
          fillLevel: 0,
          status: "Active",
          lastReported: "Just now",
        },
      ]);
    }
  };

  // Calculate overall status
  const totalDustbins = dustbins.length;
  const needingCollection = dustbins.filter(
    (dustbin) => dustbin.fillLevel >= 90
  ).length; // Example threshold

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Header as="h2" dividing>
        Smart Dustbin Management Dashboard
      </Header>

      {/* Overall Status Segment */}
      <Segment>
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Header as="h3">Overall Status</Header>
            <p>
              Total Dustbins: <Label>{totalDustbins}</Label>
            </p>
            <p>
              Dustbins Needing Collection:{" "}
              <Label color="red">{needingCollection}</Label>
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3">Recent Activity</Header>
            {/* These would typically be dynamic data */}
            <p>
              Last Updated: <Label>Just now</Label>
            </p>
            <p>
              Next Scheduled Check: <Label>1 hour</Label>
            </p>
          </Grid.Column>
        </Grid>
        <Divider vertical>Status</Divider>
      </Segment>

      {/* Dustbin Details Table Component */}
      <DustbinTable dustbins={dustbins} />

      {/* Add New Dustbin Form Component */}
      <DustbinForm onAddDustbin={handleAddDustbin} />
    </div>
  );
}

export default Dashboard;
