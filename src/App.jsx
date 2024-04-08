import Header from "./Contents/Header";
import Jobs from "./Contents/Jobs";
import "./App.css";

function App() {
  return (
    <>
      <Header title={"The Job Board"} />
      <div className="jobs-container">
        <div className="className"></div>
        <div className="title"></div>
        <div className="contractType"></div>
        <div className="country"></div>
        <div className="city"></div>
      </div>
    </>
  );
}

export default App;
