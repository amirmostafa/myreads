import "./App.css";
import {Routes, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import HomePage from "./HomePage";

function App() {


  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Search' element={<SearchBooks/>}/>
      </Routes>
        
      
    </div>
  );
}

export default App;
