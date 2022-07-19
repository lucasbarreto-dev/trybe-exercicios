import './App.css';

const value = ['Fazer projeto Solar System', 'estudar conteúdo de React', 'fazer commits dos exercícios no GitHub'];
const Task = (value) => {
  return (
    value.map((element) => <li>{element}</li>)
  );
}

function App() {
  return (
    Task(value)
  );
}

export default App;
