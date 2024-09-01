import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=Check%20out%20this%20trip%20itinerary:%20${encodeURIComponent(currentUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20out%20this%20trip%20itinerary!`;
    window.open(twitterUrl, '_blank');
  };


  return (
    <div className="mt-10 w-full h-full flex justify-center items-center space-x-4 bg-[#FF0505]">
      <button
        onClick={shareOnWhatsApp}
        className="text-[white] font-bold py-2 px-4 rounded flex items-center space-x-2"
      >
        <FaWhatsapp />
        <span>Share on WhatsApp</span>
      </button>
      <button
        onClick={shareOnTwitter}
        className="text-[white] font-bold py-2 px-4 rounded flex items-center space-x-2"
      >
        <FaTwitter />
        <span>Share on X</span>
      </button>
    </div>
  );
};

export default Footer;
