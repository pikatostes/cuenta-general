// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import ExpenseTracker from './Expense/ExpenseTracker';
import NavBar from './NavBar';
import Home from './Home';

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
