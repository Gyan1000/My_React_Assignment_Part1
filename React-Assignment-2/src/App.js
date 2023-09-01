
import './App.css';
import Button from "./Button"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="Click me" onClick={()=>{console.log("You have Clicked the Button")}}/>
      </header>
    </div>
  );
}

export default App;
