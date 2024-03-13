// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import NavBar from './components/NavBar';
import Home from './components/Home';
import ExpenseTracker from './components/Expense/ExpenseTracker';

const App = () => {
  return (
    <Router basename="/cuenta-general">
      <div>
        <NavBar />
        <Routes> {/* Utiliza Routes para definir las rutas */}
          <Route path="/" element={<Home />} /> {/* Utiliza 'element' para renderizar el componente */}
          <Route path="/expenses" element={<ExpenseTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
