import Routes from "./routes";
import Store from "./contexts/store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Store>
        <Routes />
      </Store>
    </div>
  );
}

export default App;
