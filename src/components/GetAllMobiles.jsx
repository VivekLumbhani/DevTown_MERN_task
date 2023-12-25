import React, { useState, useEffect } from 'react';
import './GetAllMobiles.css';

function GetAllMobiles() {
  const [allMobiles, setAllMobiles] = useState([]);
  const [filteredMobiles, setFilteredMobiles] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    price: '',
    memory: '',
    os: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:6969/mobiles`, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Data received:', data);

        setAllMobiles(data);
        setFilteredMobiles(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterName, value) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  useEffect(() => {

      const filteredData = allMobiles.filter((mobile) => {
      const nameMatch = mobile.namee.toLowerCase().includes(searchFilters.name.toLowerCase());
      const priceMatch = searchFilters.price ? mobile.price <= parseInt(searchFilters.price) : true;
      const memoryMatch = searchFilters.memory ? mobile.memory === searchFilters.memory : true;
      const osMatch = searchFilters.os ? mobile.OS.toLowerCase() === searchFilters.os.toLowerCase() : true;

      return nameMatch && priceMatch && memoryMatch && osMatch;
    });

    setFilteredMobiles(filteredData);
  }, [searchFilters, allMobiles]);

  return (
    <div>
      <div className="filter-container">
        <label style={{ color: 'white' }}>Name:</label>
        <input
          type="text"
          value={searchFilters.name}
          onChange={(e) => handleFilterChange('name', e.target.value)}
        />

        <label style={{ color: 'white' }}>Price:</label>
        <select
          value={searchFilters.price}
          onChange={(e) => handleFilterChange('price', e.target.value)}
        >
          <option value="">Select Price Range</option>
          <option value="10000">{'<10000'}</option>
          <option value="50000">10000-50000</option>
          <option value="50001">50000+</option>
        </select>

        <label style={{ color: 'white' }}>Memory:</label>
        <input
          type="text"
          value={searchFilters.memory}
          onChange={(e) => handleFilterChange('memory', e.target.value)}
        />

        <label style={{ color: 'white' }}>OS:</label>
        <select
          value={searchFilters.os}
          onChange={(e) => handleFilterChange('os', e.target.value)}
        >
          <option value="">Select OS</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
        </select>
      </div>

      <div className="app">
        {filteredMobiles.map((mobile, index) => (
          <div key={index} className="mobile-card">
            <h2>{mobile.namee}</h2>
            <p>Price: {mobile.price}</p>
            <p>Type: {mobile.typee}</p>
            <p>Memory: {mobile.memory}</p>
            <p>Processor: {mobile.processor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllMobiles;
