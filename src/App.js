import './App.css';
import Cities from "./components/Cities";
import Lower from "./components/Lower";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Second from "./components/Second";
function App() {
  return (
    <div className="App">
     <Nav/>
     <Search/>
     <Second/>
     <Cities/>
    
     <Lower/>
    </div>
  );
}

export default App;
