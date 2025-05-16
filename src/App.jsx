import React from "react";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "semantic-ui-react";
import "./styles/global.css";
import "semantic-ui-css/semantic.min.css"; // Import Semantic UI CSS

const App = () => (
  <Container className="min-w-full">
    <Header />
    <Dashboard />
    <Footer />
  </Container>
);

export default App;
