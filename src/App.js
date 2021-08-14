import logo from './logo.svg';
import './App.css';
import FarmacyCard from './Components/FarmacyCard';
import List from './Components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';
import React, { useState } from 'react';

function App() {

  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(search)
  }

  function handleChangeSearch(e) {
    setSearch(e.target.value)
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Municípios com mais Cap. Livre
        </Navbar.Brand>
        <Form className="d-flex" onSubmit={handleSubmit}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
            onChange={handleChangeSearch}
          />
          <Button variant="outline-success" onSubmit={handleSubmit}>Search</Button>
        </Form >
      </Navbar >
      <List searchTerm={searchTerm}></List>
    </div >
  );
}

export default App;
