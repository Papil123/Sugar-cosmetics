import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Footer />
        {/* <Navbar />
        <Tabs/> */}
      </div>
      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
