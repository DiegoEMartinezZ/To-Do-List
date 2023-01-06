import './App.css';
import Home from './pages/home/Home';
import MainPage from './pages/mainPage/MainPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/ToDoList" element={<MainPage />} />
    </Routes>
  );
}

export default App;
