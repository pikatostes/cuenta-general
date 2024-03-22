// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import NavBar from './components/NavBar';
import Home from './components/Home';
import ExpenseTracker from './components/Expense/ExpenseTracker';

const App = () => {
  return (
    <Router basename="/cuenta-general">
        <NavBar />
        <div className="bg-dark text-light p-4">
        <Routes> {/* Utiliza Routes para definir las rutas */}
          <Route path="/" element={<ExpenseTracker />} /> {/* Utiliza 'element' para renderizar el componente */}
          <Route path="/expenses" element={<Home />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
