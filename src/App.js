import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Recipes from './components/Recipes.js';
import Home from "./components/Home.js"
import TopRated from "./components/TopRated.js"
import Popular from './components/Popular.js';
import DetailPage from './components/kinoPage/DetailPage.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/Popular' element={<Popular />} />
        <Route path='/topRated' element={<TopRated />} />
        <Route path='/movies/detail-page/:id' element={<DetailPage  />} />
        
      </Routes>
    </div>
  );
}

export default App;
