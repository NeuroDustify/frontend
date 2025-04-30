import React, { useState } from "react";
import { Form, Input, Button, Header } from "semantic-ui-react";

function DustbinForm({ onAddDustbin }) {
  const [newDustbin, setNewDustbin] = useState({ id: "", location: "" });

  // Handle input changes for the form
  const handleInputChange = (e, { name, value }) => {
    setNewDustbin({ ...newDustbin, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    onAddDustbin(newDustbin);
    // Clear the form
    setNewDustbin({ id: "", location: "" });
  };

  return (
    <>
      <Header as="h3" style={{ marginTop: "30px" }}>
        Add New Dustbin
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Dustbin ID</label>
          <Input
            placeholder="Enter Dustbin ID"
            name="id"
            value={newDustbin.id}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Input
            placeholder="Enter Location"
            name="location"
            value={newDustbin.location}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button primary type="submit">
          Add Dustbin
        </Button>
      </Form>
    </>
  );
}

export default DustbinForm;
