import React from 'react'

// import react router stuff
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./styles/style.css"
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Home';
import Hotel from './Hotel';
import Itinerary from './Itinerary';
import RegForm from './RegForm';
import FormSubmit from './FormSubmit';

export default class App extends React.Component {
  state = {
    "page": "home"
  }
  setPage = (page) => {
    this.setState({
      "page": page
    })
  }
  navbar = () => {
    return <React.Fragment>
      <main className="container-fluid p-0">
        <div className="mini-nav">
          <div><button onClick={() => { this.setPage("home") }} className={this.state.page === "home" ? "mini-nav-active" : null}><i className="fa-solid fa-house-chimney"></i></button></div>
          <div><button onClick={() => { this.setPage("itinerary") }} className={this.state.page === "itinerary" ? "mini-nav-active" : null}><i className="fa-solid fa-route"></i></button></div>
          <div><button onClick={() => { this.setPage("hotel") }} className={this.state.page === "hotel" ? "mini-nav-active" : null}><i className="fa-solid fa-circle-info"></i></button></div>
        </div>
      </main>
    </React.Fragment>
  }
  render() {
    return <React.Fragment>
      <Router>
        <nav className="container-fluid p-0">
          <ul className="mini-nav">
            <li>
              <Link to="/" onClick={() => { this.setPage("home") }} className={this.state.page === "home" ? "mini-navlink mini-nav-active" : "mini-navlink"}>
                <i className="fa-solid fa-house-chimney"></i>
              </Link>
            </li>
            <li>
              <Link to="/itinerary" onClick={() => { this.setPage("itinerary") }} className={this.state.page === "itinerary" ? "mini-navlink mini-nav-active" : "mini-navlink"}>
                <i className="fa-solid fa-route"></i>
              </Link>
            </li>
            <li>
              <Link to="/hotel" onClick={() => { this.setPage("hotel") }} className={this.state.page === "hotel" ? "mini-navlink mini-nav-active" : "mini-navlink"}>
                <i className="fa-solid fa-circle-info"></i>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          {/* Home route */}
          <Route path="/" element={
            <Home
              setPage={this.setPage}
            />
          } />

          {/* Itinerary route */}
          <Route path="/itinerary" element={<Itinerary />} />

          {/* Hotel route */}
          <Route path="/hotel" element={<Hotel />} />

          {/* Reg Form route */}
          <Route path="/register" element={<RegForm />} />

          {/* Registered route */}
          <Route path="/form_submit" element={<FormSubmit />} />

        </Routes>
      </Router>
    </React.Fragment>
  }
}