import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import Detail from "./pages/Detail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/toprated" element={<TopRated />}></Route>
          <Route path="/upcoming" element={<UpComing />}></Route>
          <Route path="/details/:id" element={<Detail />}></Route>

          {/* <Route path="/*" element={<h1>Error Page</h1>}></Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
