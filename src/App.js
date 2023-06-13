import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Contact from './pages/Contact';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/to-do-app/" element={<Home />} />
          <Route path="/to-do-app/todo" element={<TodoList />} />
          <Route path="/to-do-app/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
