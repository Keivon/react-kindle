
import "./App.css";

function App() {
  let cardarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className="App">
     
      <div className="Cardtable">
        {cardarr.map((x) => (
          <div className="card" key={x}>
            <h1>Title - Card {x}</h1>
            <p>Medium length description. Let's add a few more words here.</p>
            <div className="visual"></div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
