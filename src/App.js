import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {


  return (
    <div className="App">
      <h1>Hola mundo</h1>


      <TaskList/>
      <TaskForm/>

    </div>
  );
}

export default App;
