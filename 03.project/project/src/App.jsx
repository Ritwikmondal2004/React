import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Todoitem from "./components/Todoitem";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      {/* 1st */}
      <AddTodo />
      {/* 2nd  */}
      <Todoite />
      {/* 3rd */}
      <div class="row">
        <div class="col-6">Go to collage</div>
        <div class="col-4">4/10/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
