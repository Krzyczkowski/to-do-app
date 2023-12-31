import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Contact from './pages/Contact';
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/to-do-app/" />} />
          <Route path="/to-do-app" element={<Home />} />
          <Route path="/to-do-app/todo" element={<TodoList />} />
          <Route path="/to-do-app/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
