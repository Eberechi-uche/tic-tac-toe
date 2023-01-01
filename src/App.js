
import './App.css';
import Board from "./components/Board"







function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>tic-tac-toe</h1>
      </header>
      <section className='section-1'>
        <Board />
      </section>
      <footer>
      <a href="https://www.flaticon.com/free-animated-icons/happy" title="happy animated icons">Happy animated icons created by Freepik - Flaticon</a>
      <a href="https://www.flaticon.com/free-animated-icons/emoticon" title="emoticon animated icons">Emoticon animated icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
