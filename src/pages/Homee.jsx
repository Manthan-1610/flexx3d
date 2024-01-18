import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const Homee = () => {

  const slides = [
    {
      image: './homee-img.png',
      title: 'Slide 1 Title',
      description: 'Description for Slide 1.',
      link: '/filament',
      buttontext: 'Explore',
    },
    {
      image: './homee-img.png',
      title: 'Slide 2 Title',
      description: 'Description for Slide 2.',
      link: '/service',
      buttontext: 'Service',
    },
    {
      image: './homee-img.png',
      title: 'Slide 3 Title',
      description: 'Description for Slide 3.',
      link: '/contact',
      buttontext: 'Contact',
    },
    {
      image: './homee-img.png',
      title: 'Slide 4 Title',
      description: 'Description for Slide 4.',
      link: '/',
      buttontext: 'Set Screen',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      {/* <div className="relative h-[720px] overflow-hidden">
        <img
          src="./homee-img.png"
          alt="Hero Image"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform scale-105 hover:scale-100"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-7xl mb-4 font-extrabold leading-tight text-shadow">
            YOUR ONLINE HUB
          </h1>
          <h2 className="text-3xl mb-6 font-bold leading-tight text-shadow">
            FOR 3D PRINTING
          </h2>
        </div>
      </div> */}
        {/* SLideShow Section */}
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[720px] overflow-hidden"
              onMouseEnter={() => sliderSettings.autoplay && sliderSettings.autoplay()}
              onMouseLeave={() => sliderSettings.autoplay && sliderSettings.autoplay()}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <h1 className="text-7xl mb-4 font-extrabold leading-tight text-shadow">{slide.title}</h1>
                <p className="text-3xl font-bold leading-tight text-shadow">{slide.description}</p>
                <Link to={slide.link} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 mt-4">
                  {slide.buttontext}
                </Link>
              </div>
            </div>
          ))}
      </Slider>

      {/* Product Display */}      
      <section className="product-display py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Product Display</h2>
          <p className="text-gray-800 leading-loose mb-8">
            Discover the latest products in our Products.
          </p>

          {/* Category-1 */}
          <div className="category">
            <h3 className="text-2xl font-bold mb-4">Category 1</h3>
            <p className="text-gray-600 mb-6">
              Explore cutting-edge products in Category 1 that redefine manufacturing standards.
            </p>
             {/* Explore More Link */}
             <Link to="/filament" className="text-blue-500 font-bold mt-4">
              Explore More
            </Link>
            {/* Image Gallery for Category-1 */}
            <div className="grid grid-cols-4 gap-8">
              {/* Replace these image URLs with actual images related to Category-1 */}
              {[1, 2, 3, 4].map((imageNumber) => (
                <div
                  key={imageNumber}
                  className="image-container relative overflow-hidden transition-transform duration-300 transform hover:scale-105"
                >
                  <img
                    // src={`./category1-image${imageNumber}.png`}
                    src={`./abs.png`}
                    alt={`Category 1 Image ${imageNumber}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      {/* <section className="text-center py-8 bg-gray-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-2">Welcome to Our 3D Printing Service</h1>
          <p className="text-gray-800 leading-loose">
            Explore the future of manufacturing with cutting-edge 3D printing technology.
          </p>
        </div>
      </section> */}

      {/* Image Gallery */}
      <section className="image-gallery py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Discover Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Replace these image URLs with actual images related to 3D printing */}
            <div className="image-container relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img src="./work-1.jpeg" alt="3D Printing Example 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="image-container relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img src="work-2.jpeg" alt="3D Printing Example 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="image-container relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img src="work-3.jpeg" alt="3D Printing Example 3" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
        <section className="video-gallery py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Watch Our Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Replace these video paths with the actual paths of your videos */}
              <div className="video-container relative overflow-hidden rounded-lg">
              <div className="video-frame w-50 h-50 overflow-hidden relative">
          <video
            className="w-full h-full object-cover"
            controls={false}  // Hide controls for continuous play
            autoPlay
            loop
            muted   // Mute the video to prevent autoplay restrictions
          >
                    <source src="public\WhatsApp Video 2024-01-18 at 23.31.07.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <div className="video-container relative overflow-hidden rounded-lg">
                <div className="video-frame w-50 h-50 overflow-hidden relative">
                <video
            className="w-full h-full object-cover"
            controls={false}  // Hide controls for continuous play
            autoPlay
            loop
            muted   // Mute the video to prevent autoplay restrictions
          >
                    <source src="public\WhatsApp Video 2024-01-18 at 23.31.07.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Content Section */}
      <section className="content-section py-12">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Choose Us?</h2>
          <p className="text-gray-800 leading-loose text-center">
            We are committed to delivering high-quality 3D printing services tailored to your needs.
            Our state-of-the-art technology ensures precision and efficiency in every project.
          </p>
        </div>
      </section>

      {/* Contact Us Button */}
      <section className="contact-section py-12 bg-gray-800 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Any Query?</h2>
          <p className="text-lg mb-8">
            Contact us today for all your 3D printing needs. We're here to help!
          </p>
          <Link to="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>

       {/* Footer Section */}
       <footer className="footer-section py-8 bg-gray-800 text-white">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Side (Image) */}
          <div className="footer-logo">
            <img src="/flex-logo.png" alt="Footer Logo" style={{height: '6rem'}} />
          </div>

          {/* Middle (Shop Title and Links) */}
          <div className="footer-shop ml-10 items-center" style={{ marginRight:600 }}> {/* Adjust the margin as needed */}
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <div className="footer-links">
              {/* Replace the paths with the actual paths of your pages */}
              <Link to="/service" className="block hover:text-gray-500 mb-2">Service</Link>
              <Link to="/filament" className="block hover:text-gray-500 mb-2">Filaments</Link>
              <Link to="/privacy-policy" className="block hover:text-gray-500 mb-2">Privacy Policy</Link>
              <Link to="/terms-of-service" className="block hover:text-gray-500 mb-2">Terms of Service</Link>
              <Link to="/refund-policy" className="block hover:text-gray-500 mb-2">Refund and Return Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homee;