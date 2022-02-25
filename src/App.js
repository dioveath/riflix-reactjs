// import logo from './logo.svg';
import './App.css';
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <HomePage/> }/>
        <Route path="/movie/:movieId" element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
