import React from 'react';

function Header() {
  return (
    <header className="flex justify-around px-4 py-6 bg-gray-900 text-white  ">
      <div className="text-3xl font-bold">Penta.ai</div>
      <nav className="flex space-x-4">
        <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white font-bold py-2 px-4 rounded">Get A Demo</button>
      </nav>
    </header>
  );
}

export default Header;
