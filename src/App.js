import './App.css';
import { Board } from "./components/Board"

function App() {
  return (
    <>
      <div className="header"><img src='favicon.png' /><h1>Sudoku Solver</h1></div>
      <Board />
    </>
  )
}

export default App;
