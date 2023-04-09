import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Landing from './components/Landing';
import Home from './components/Home';
import ChooseStarter from './components/ChooseStarter';
import Game from './models/Game';
import Party from './components/Party';

function App() {
  const game: Game = new Game();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home party={game.getPlayerParty()} />} />
          <Route path="/starter" element={<ChooseStarter setStarter={game.addPokemonToPlayerParty} />} />
          <Route path="/party" element={<Party party={game.getPlayerParty()} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
