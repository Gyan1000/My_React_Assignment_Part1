
import './App.css';
import List from "./List"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List items={['Java','php','C++']}/>
      </header>
    </div>
  );
}

export default App;
