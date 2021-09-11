import "./App.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import { contents } from "./contents";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="cards">
          {contents.map((content) => {
            return <Cards key={content.id} {...content}></Cards>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
