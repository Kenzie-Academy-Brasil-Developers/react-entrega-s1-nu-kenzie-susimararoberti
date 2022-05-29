import { useState } from "react";
import "./App.css";
import Home from "./routes/Home";
import NuKenzie from "./routes/NuKenzie";

function App() {
  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page ? <NuKenzie setPage={setPage} /> : <Home setPage={setPage} />}
    </div>
  );
}

export default App;
