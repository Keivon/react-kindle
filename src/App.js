import BookReader from "./components/Pdf-viewer";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/:book" element={<BookReader/>}/>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
