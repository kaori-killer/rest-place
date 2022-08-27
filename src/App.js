import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./routes/Home";


function App() {
  return (
    <Router>
      <Nav />
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>  
  );
}

export default App;
