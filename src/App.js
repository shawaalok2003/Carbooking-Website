import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import CarList from './component/Carlist';
import BookingForm from './component/BookingForm';
import Footer from './component/Footer';
import About from './component/About';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;