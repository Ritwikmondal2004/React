import "./App.css";
import AppName from "./component/component";
import "AddTodo"
function App() {
  return (
    <center className="container">
      <AppName></AppName>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter TODO Here" />
          </div>
          <div className="col-4">
            <input type="date" name="" id="date" />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-outline-success">
              Add
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
