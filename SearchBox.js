import React, { useState } from 'react';
import data from '../data';

function SearchBox() {
  const [categories, setCategories] = useState({ data });

  const filteredData = data.filter((items) =>
    items.categories.toLowerCase().includes(categories.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Search for Course.."
      />
      <ul>
        {filteredData.map((items) => (
          <li key={items.id}>{items.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
