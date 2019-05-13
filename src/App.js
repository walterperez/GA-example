import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import bruce from "./bewaltermyfriend.jpg";
import torrente from "./torrente.jpg";
import kim from "./kim.jpg";

function NavBar() {
  return (
    <div className="nav">
      <div className="item">
        <Link to="./">Bruce</Link>
      </div>
      <div className="item">
        <Link to="./Torrent">Torrent</Link>
      </div>
      <div className="item">
        <Link to="./Kim">Kim</Link>
      </div>
    </div>
  );
}

function Bruce() {
  return (
    <div className="route">
      <h1>Bruce</h1>
      <p>Be Walter my friend</p>
      <img src={bruce} className="App-logo" className="bruce" alt="logo" />
    </div>
  );
}
function Torrent() {
  return (
    <div className="route">
      <h1>Torrent</h1>
      <p>Te gustan las pistolitas xava?</p>
      <img src={torrente} className="App-logo" className="torr" alt="logo" />
    </div>
  );
}
function Kim() {
  return (
    <div className="route">
      <h1>김정은</h1>
      <p>김정은김정은김정은김정은</p>
      <img src={kim} className="App-logo kim" alt="logo" />
    </div>
  );
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Bruce} />
            <Route exact path="/Torrent" component={Torrent} />
            <Route exact path="/Kim" component={Kim} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
