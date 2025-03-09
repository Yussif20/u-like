import { Link } from 'react-router-dom';
import logoImage from '../assets/ulike-logo.svg';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`py-6 px-4 sm:px-10 transition-all duration-300 ease-in-out ${
        isSticky
          ? 'fixed top-0 left-0 right-0 z-50 shadow-md bg-white'
          : 'fixed top-0 left-0 right-0 z-50 bg-white lg:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and navigation container */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <img className="w-[120px] h-[120px]" src={logoImage} alt="Logo" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex items-center gap-1 text-gray-700 text-xl cursor-pointer hover:text-blue-600 transition-colors duration-200">
                <p>خدماتنا</p>
                <ion-icon name="caret-down-outline"></ion-icon>
              </div>
              <div
                className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 transition-all duration-200 ease-in-out ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <Link
                  to="/service1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الأولى
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الثانية
                </Link>
                <Link
                  to="/service3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الثالثة
                </Link>
              </div>
            </div>

            {/* Navigation links */}
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link
                    to="projects"
                    className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-200"
                  >
                    مشاريعنا
                  </Link>
                </li>
                <li>
                  <Link
                    to="videos"
                    className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-200"
                  >
                    الفيديوهات
                  </Link>
                </li>
                <li>
                  <Link
                    to="blog"
                    className="text-gray-700 text-xl hover:text-blue-600 transition-colors duration-200"
                  >
                    المدونة
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Contact button (always visible) and Mobile menu button */}
        <div className="flex items-center gap-4">
          <button
            style={{
              cursor: 'pointer',
              fontWeight: '500',
              padding: '1rem 1.5rem', // Default for lg
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s linear',
              background: isHovered
                ? 'transparent'
                : window.innerWidth >= 1024
                ? 'linear-gradient(to right, #553BB5, #7763C4)'
                : 'transparent',
              color: isHovered ? '#553BB5' : '#ffffff',
              border: isHovered ? '2px solid #553BB5' : '2px solid transparent',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:py-4 lg:px-6 lg:text-base md:py-3 md:px-3 md:text-sm sm:py-2 sm:px-2"
          >
            <ion-icon
              size="large"
              name="logo-whatsapp"
              style={{
                color: isHovered
                  ? '#553BB5'
                  : window.innerWidth >= 1024
                  ? '#ffffff'
                  : '#553BB5',
                transition: 'all 0.3s',
              }}
            ></ion-icon>
            <span className="hidden lg:inline">تواصل معنا</span>
          </button>
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ion-icon
              name={isMenuOpen ? 'close-outline' : 'menu-outline'}
              size="large"
            ></ion-icon>
          </button>
        </div>
      </div>

      {/* Mobile menu with animation from top */}
      <div
        className={`lg:hidden absolute left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <div className="relative">
            <div
              className="flex items-center gap-1 text-gray-700 text-xl cursor-pointer hover:text-blue-600"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <p>خدماتنا</p>
              <ion-icon name="caret-down-outline"></ion-icon>
            </div>
            {isServicesOpen && (
              <div className="mt-2 bg-white rounded-md shadow-lg py-2">
                <Link
                  to="/service1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الأولى
                </Link>
                <Link
                  to="/service2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الثانية
                </Link>
                <Link
                  to="/service3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  الخدمة الثالثة
                </Link>
              </div>
            )}
          </div>
          <Link
            to="projects"
            className="text-gray-700 text-xl hover:text-blue-600"
          >
            مشاريعنا
          </Link>
          <Link
            to="videos"
            className="text-gray-700 text-xl hover:text-blue-600"
          >
            الفيديوهات
          </Link>
          <Link to="blog" className="text-gray-700 text-xl hover:text-blue-600">
            المدونة
          </Link>
        </div>
      </div>
    </header>
  );
};
