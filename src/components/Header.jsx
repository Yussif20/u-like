import { Link } from 'react-router-dom';
import logoImage from '../assets/ulike-logo.svg';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between py-6 px-10">
        <div className="flex items-center justify-evenly text-[#3E3E3E text-xl leading-7">
          <img className="size-[120px]" src={logoImage} alt="Logo" />
          <p>خدماتنا</p>
          <nav>
            <li>
              <Link to="projects">مشاريعنا</Link>
            </li>
            <li>
              <Link to="videos">الفيديوهات</Link>
            </li>
            <li>
              <Link to="blog">المدونة</Link>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
