import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import TodoList from "./components/TodoList";

function App() {

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-4'>Todo List</h1>
      <TodoList />
    </div>
  )
}

export default App
