import "./App.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="cards">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
