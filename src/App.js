import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import ListStudents from "./components/ListStudents";

function App() {
  return (
    <div>
      <h2 className="text-center">List students</h2>

      <Router>
        <div className="d-flex w-100 wrap justify-content-around mb-5">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn btn-primary" to="/add">Them</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <ListStudents />
          </Route>
          <Route exact path="/add">
            <AddStudent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
