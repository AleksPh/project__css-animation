import { Link } from 'react-router-dom';
import regImg from '../../image/registration-img.png'

const Header = ({value})=>{
  return(
    <header className="upper__header">
        <div className="header__container">
          <div className="header__logo"><span className="header__logo-span">CSS</span>-Animation</div>
          <div className="header__menu">
            <div className={`header__menu-item ${value=='home' ? 'active' : ''}`}><Link to='/'>Home</Link></div>
            <div className={`header__menu-item ${value=='loader' ? 'active' : ''}`}><Link to="/Loaders">Loaders</Link></div>
            <div className={`header__menu-item ${value=='cube' ? 'active' : ''}`}><Link to="/Cubes">Shapes</Link></div>
            <div className={`header__menu-item ${value=='all' ? 'active' : ''}`}><Link to="/All">All</Link></div>
          </div>
          <div className="header__registration">
            <Link to='/Registration'><img className="header__registration-img" src={regImg} alt="Registration-image" /></Link>
            </div>  
        </div>
      </header>
  )
}

export default Header