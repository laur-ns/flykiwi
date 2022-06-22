import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer-links-wrapper'>
        <Link to='/' className='about'>
          about
        </Link>
        <Link to='/' className='github'>
          github
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
