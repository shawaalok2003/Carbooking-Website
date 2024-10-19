import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import CarList from './component/Carlist';
import BookingForm from './component/BookingForm';
import Footer from './component/Footer';
import About from './component/About';
import SearchCar from './component/SearchCar';

const App = () => {
  const [filteredCars, setFilteredCars] = useState([]); // State to store search results

  const handleSearch = (searchCriteria) => {
    // Logic to filter cars based on search criteria
    console.log(searchCriteria);
    // You would normally call an API or filter your car data here
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchCar onSearch={handleSearch} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;