import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <footer className="bg-gradient-to-r from-blue-300 to-purple-300 border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-center">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <NavLink
                to="/"
                exact
                activeClassName="text-orange-700"
                className="block p-3 bg-white rounded-md shadow-md hover:shadow-lg transition duration-200"
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/insert"
                activeClassName="text-orange-700"
                className="block p-3 bg-white rounded-md shadow-md hover:shadow-lg transition duration-200"
              >
                Insert Mobile
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
