import "./css/App.css";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { ContextProvider } from "./Context";
import Semester from "./components/Semesters"
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Nav></Nav>
        <Semester></Semester>
        <Homepage></Homepage>
        <Footer></Footer>
      </ContextProvider>
    </div>
  );
}

export default App;
