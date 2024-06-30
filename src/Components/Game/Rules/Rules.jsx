import "./Rules.css";

function Rules({ startGame }) {
  return (
    <div className="welcome_container">
      <h1>Welcome to the Pokémon Memory Challenge!</h1>
      <p>
        Are you ready to test your memory with your favorite Pokémon? The rules
        are simple: click on each Pokémon card only once. But be careful! If you
        click on the same card twice, your score will reset to zero.
      </p>
      <p>
        You have three chances. If you fail three times, it’s game over. The
        goal is to click all the cards without repeating any to achieve the
        highest score and advance to the next level.
      </p>
      <p>
        Think you have what it takes to remember them all? Dive in and prove
        your skills!
      </p>
      <button onClick={startGame}>Start the Game</button>
    </div>
  );
}

export default Rules;
