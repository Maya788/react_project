import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const Foot = () => {
  return (
    <footer className="bg-blue-800 text- mt-5 pt-10">
      <div className="max-w-6xl mx-auto text-white px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold underline mb-4">Contact us</h3>
          <p>Address: Rolpa district Mewang-1 Rolpa</p>
          <p>Office Hours: Sun - Fri, 10:00 AM - 05:00 PM</p>
        </div>

        {/* Important Links */}
       {/* Important Links */}
<div>
  <h3 className="text-xl font-bold underline mb-4">Important Links</h3>
  <ul>
    <li>
      <a
        href="https://itms.ctevt.org.np:5580//"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        CTEVT Central Office
      </a>
    </li>
    <li>
      <a
        href="https://ctevtexam.org.np/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        CTEVT Exam
      </a>
    </li>
    <li>
      <a
        href="https://ctevtp5.org.np/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        CTEVT Lumbini State Office
      </a>
    </li>
  </ul>
</div>


        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-bold underline mb-4">Follow us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.facebook.com/rolpapolytechnic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:underline">facebook
              </a>
            </li>
            <li>Tiktok</li>
            <li>YouTube</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>

      <hr className="border-t border-white/20 mb-4" />

      {/* Social Icons and Copyright */}
      <div className="max-w-6xl mx-auto text-white px-4 flex flex-col md:flex-row items-center justify-between pb-4">
        <p className="text-sm">&copy; 2025 Rolpa Polytechnic Institute</p>
        <div className="flex gap-4 mt-2 md:mt-0 text-xl">
          <a href="https://www.facebook.com/rolpapolytechnic" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaDribbble /></a>
        </div>
      </div>

      {/* Nepali Bottom Text */}
      <div className="bg-blue-gray-50 flex flex-row text-black text-center py-2 text-sm font-semibold">
        <marquee>
          <span>सिपमुलक शिक्षा पढौं,आत्मनिर्भर बनौं।। </span>
        </marquee>
        <marquee> <span className="mx-4">प्राविधिक शिक्षा आजको आवश्यकता।।</span>
         </marquee>
         <marquee> <span>रोजगारी बनौं।।</span></marquee>
      </div>
    </footer>
  );
};

export default Foot;
