import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';



function App() {
  return (
   
    <div className="App">
    
    <h2>CRUD</h2>
    <br />
    <BrowserRouter>
    <Routes>
      <Route exact path="/create" element={< Create />} />
      <Route exact path="/read" element={< Read />} />
      <Route exact path="/update" element={< Update/>} />
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
