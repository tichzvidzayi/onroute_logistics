import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-12 text-center">
      <p className="text-xl mb-4">
        &copy; {new Date().getFullYear()} Logistics UK. All rights reserved.
      </p>
      <hr className="border-red-600 border-4 my-4" />
    </footer>
  );
};

export default Footer;
