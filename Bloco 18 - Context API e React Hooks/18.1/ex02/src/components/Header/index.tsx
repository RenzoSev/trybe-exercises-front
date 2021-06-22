import React from 'react';
import { useReddit } from '../../hooks/useReddit';

function Header() {
  const { setSelectedCategory } = useReddit();
  
  return (
    <header>
      <select
        name="selectsub"
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="frontend">frontend</option>
        <option value="reactjs">reactjs</option>
      </select>
    </header>
  );
}

export default Header;
