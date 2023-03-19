import { React, useState } from 'react';
import './styles.css';
import { v4 as uuidv4 } from 'uuid';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const classData = [
    { id: uuidv4(), title: 'geo-physics', teacher: 'prof. Gaurav', avail: true, slots: '8-9am' },
    { id: uuidv4(), title: 'communication', teacher: 'prof. Jha', avail: true, slots: '8-9am, 9-10am' },
    { id: uuidv4(), title: 'cs50', teacher: 'prof. J', avail: true, slots: '8-9pm' },
    { id: uuidv4(), title: 'cyber', teacher: 'prof. Gaurav kr', avail: true, slots: 'dayTime' },
  ];
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = classData.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  const handleClick = (item) => {
    alert(`Booking slot for ${item.title} with ${item.teacher}`);
  };

  return (
    <div>
      <div className="header">
        <h1>Hello Student</h1>
      </div>
      <div className="classes">
        <h3>Classes</h3>
        <div className="search-bar">
          <input type="text" placeholder="Search" onChange={handleSearch} value={searchQuery} />
          <button>Go</button>
        </div>
      </div>

      <div className="subjects">
        {/* subjects starts here */}
        
        {filteredData.map((item) => (
          <div key={item.id} className="subject">
            <h2>{item.title}</h2>
            <p>{item.teacher}</p>
            {item.avail ? <p>available</p> : <p>unavailable</p>}
            <p>{item.slots}</p>
            <button className="book-slot" onClick={() => handleClick(item)}>book-slot</button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Main;
