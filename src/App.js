import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Joke, PageNotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/joke" element={<Joke />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;