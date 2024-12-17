import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ name, path }) => {
  return (
    <Link
      to={path}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
    >
      {name}
    </Link>
  );
};

export default NavItem;