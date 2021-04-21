import { useState } from "react";

import Routes from "./routes";
import GlobalState from "./contexts/GlobalState";

import "./App.css";

const initialState = {
  posts: [],
};

function App() {
  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <GlobalState.Provider value={[state, setState]}>
        <Routes />
      </GlobalState.Provider>
    </div>
  );
}

export default App;
