import "./App.css";
import { useState } from "react";
import Board from "./components/Board";
import { PlayerSelector } from "./components/PlayerSelector";

function App() {
  const [players, setPlayers] = useState(0);
  function handleModeselect(i) {
    setPlayers(i);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>tic-tac-toe</h1>
      </header>
      <section className="section-1">
        {!players ? (
          <PlayerSelector selectMode={handleModeselect}></PlayerSelector>
        ) : (
          <Board players={players} />
        )}
      </section>
      <footer>
        <a
          href="https://www.flaticon.com/free-animated-icons/happy"
          title="happy animated icons"
        >
          Happy animated icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-animated-icons/emoticon"
          title="emoticon animated icons"
        >
          Emoticon animated icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
