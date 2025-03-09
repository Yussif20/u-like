import { Link } from 'react-router-dom';
import logoImage from '../assets/logo-white.svg';

export const Footer = () => {
  return (
    <footer className="bg-[#553BB5] text-white pt-12">
      <div className="flex items-center justify-between w-5/6 mx-auto border-t border-[#6c757d]">
        <Link to="/">
          <img className="w-[120px]" src={logoImage} alt="Logo" />
        </Link>
        <Link to="/blog">
          <h5 className="text-xl font-medium hover:text-[#6c757d] transition">
            المدونة
          </h5>
        </Link>
        <div className="flex items-center gap-4">
          <ion-icon
            className="hover:-translate-y-3 transition-transform"
            size="large"
            name="logo-twitter"
          ></ion-icon>
          <ion-icon
            className="hover:-translate-y-3 transition-transform"
            size="large"
            name="logo-instagram"
          ></ion-icon>
          <ion-icon
            className="hover:-translate-y-3 transition-transform"
            size="large"
            name="logo-linkedin"
          ></ion-icon>
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          className="text-[#3984f5] transition hover:text-[#0d6efd] text-base leading-6 "
          to="/rights"
        >
          سياسة الخصوصية
        </Link>
      </div>

      <div className="bg-[#b8ade03d] py-2 text-base leading-6 flex items-center justify-center">
        حقوق الطبع والنشر © 2025 u-like.net. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};
