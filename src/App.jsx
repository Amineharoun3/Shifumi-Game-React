import React, { useState } from "react";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const choices = [
  { name: "pierre", icon: <FaHandRock size={60} color="blue" /> },
  { name: "papier", icon: <FaHandPaper size={60} color="yellow" /> },
  { name: "ciseaux", icon: <FaHandScissors size={60} color="red" /> },
];

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const startGame = () => {
    setGameStarted(true);
  };

  const handleChoice = (choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)].name;
    setUserChoice(choice);
    setComputerChoice(computer);
    determineWinner(choice, computer);
  };

  

  return (
    <div className="container">
      {!gameStarted ? (
        <div className="welcome-screen">
          <h1>Bienvenue sur <span>Shifumi</span></h1>
          <p>Affrontez l'ordinateur dans une partie de Pierre-Papier-Ciseaux !</p>
          <button className="start-button" onClick={startGame}>Commencer</button>
        </div>
      ) : (
        <div className="game-screen">
          <h1>Shifumi - Pierre, Papier, Ciseaux</h1>

          <div className="scoreboard">
            <p>👤 Joueur : {score.user} - {score.computer} 🤖 Ordinateur</p>
          </div>

          <div className="buttons">
            {choices.map((choice) => (
              <button key={choice.name} className="choice-button" onClick={() => handleChoice(choice.name)}>
                {choice.icon}
              </button>
            ))}
          </div>

          {userChoice && computerChoice && (
            <div className="choices">
              <p>
                Vous : {choices.find(c => c.name === userChoice).icon}
              </p>
              <p>
                Ordinateur : {choices.find(c => c.name === computerChoice).icon}
              </p>
            </div>
          )}

          <p className="result">{result}</p>
        </div>
      )}
    </div>
  );
};

export default App;
