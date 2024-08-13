import React, { useEffect, useState } from 'react'
import './NavBar.css'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../assets/imgs/logo.png'
import Btn from '../btn/Btn';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar({active}) {
  let [current, setCurrent] = useState('Home');
  let [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const pages = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'About Us',
      to: '/About'
    },
    {
      name: 'Services',
      to: '/Services'
    },
    {
      name: 'Careers',
      to: '/Careers'
    },
    {
      name: 'Contact',
      to: '/'
    },
  ]

  useEffect(() => {
    setCurrent(active)
  },[active])

  return (
    <div>
      {/* navbar top */}
      <div className="nb-top">
        <div>B2B - CPA - CPL</div>
        <div className='np-upper-right'>
          <div className="np-upper-right-item">
            <PhoneEnabledIcon sx={{ color: 'red' }} />
            <p>Call Us: 812-225-9590</p>
          </div>
          <div className="np-upper-right-item">
            <EmailIcon sx={{ color: 'red' }} />
            <p>Email Us: cs@callhubpros.com</p>
          </div>
          <div className="np-upper-right-item">
            <EmailIcon sx={{ color: 'red' }} />
            <p>Email Us: sales@callhubpros.com</p>
          </div>
        </div>
      </div>
      {/* navbar bottom  */}
      <div className="nb-bottom">
        <img src={logo} alt="logo" />
        <div className='menu-icon' onClick={() => setShowMenu(!showMenu)} >{showMenu ? <CloseIcon/> : <MenuIcon/>}</div>
        <div className={showMenu ? 'nb-linksBox show-menu' : 'nb-linksBox'} >
          <ul className='nb-ul'>
            {pages.map(e => (
              <li
                key={e.name}
                className={current === e?.name ? 'active' : ''}
                onClick={() => {
                  setShowMenu(false);
                  setCurrent(e?.name);
                  navigate(e?.to);
                }}
              >
                {e?.name}
              </li>
            ))}
          </ul>
          <Btn
            label="Get Started"
          />
        </div>
      </div>
    </div>
  )
}
