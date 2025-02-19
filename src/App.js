import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "khigiadn94";
  const age = 17;
  const isMale = true;
  const student = {
    name: "Haluhak",
  };
  const colorList = ["red", "green", "blue"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Haluhak-deploy-Vercel2</p>
        <p>
          Hello {name} - {age} - {isMale ? "Male" : "Female"}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        <ul>
          {colorList.map((color) => (
            <li key={color} style={{ color }}>
              {color}
            </li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
