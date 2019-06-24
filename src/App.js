import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostView from "./components/PostView";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <section className="section container content">
          <Route exact path="/" component={PostList} />
          <Route path="/:slug" component={PostView} />
        </section>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
