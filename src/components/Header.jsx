import React from "react";
import { Menu, Container } from "semantic-ui-react";

const Header = () => (
  <Menu attached="top">
    <Container>
      <Menu.Item header>Smart Dustbin Management</Menu.Item>
      {/* Add more menu items here if needed */}
    </Container>
  </Menu>
);

export default Header;
