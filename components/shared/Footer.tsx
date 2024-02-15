import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white pt-8 pb-4">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us</h2>
          <ul className="list-none">
            <li><a href="#" className="block text-sm mb-1">About Us</a></li>
            <li><a href="#" className="block text-sm mb-1">Job Opportunities</a></li>
            <li><a href="#" className="block text-sm mb-1">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Products</h2>
          <ul className="list-none">
            <li><a href="#" className="block text-sm mb-1">Headphones</a></li>
            <li><a href="#" className="block text-sm mb-1">Speakers</a></li>
            <li><a href="#" className="block text-sm mb-1">Earphones</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Support</h2>
          <ul className="list-none">
            <li><a href="#" className="block text-sm mb-1">FAQ</a></li>
            <li><a href="#" className="block text-sm mb-1">Shipping</a></li>
            <li><a href="#" className="block text-sm mb-1">Returns</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Social Media</h2>
          <ul className="list-none">
            <li><a href="#" className="block text-sm mb-1"><FaFacebook style={{ fontSize: '16px' }} /> </a></li>
            <li><a href="#" className="block text-sm mb-1"><FaTwitter style={{ fontSize: '16px' }} /> </a></li>
            <li><a href="#" className="block text-sm mb-1"><FaInstagram style={{ fontSize: '16px' }} /> </a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">All Rights Reserved &copy; 2021</p>
    </div>
  </footer>
  );
};

export default Footer;