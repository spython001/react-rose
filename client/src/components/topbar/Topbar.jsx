import './topbar.css'
import { Facebook, Instagram, Twitter, GitHub } from '@mui/icons-material'
import LightDarkButton from '../lightDarkButton/LightDarkButton'
import { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Context } from '../../context/Context';

export default function Topbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "/api/images/"

  const handleLogout = () =>{
    dispatch({ type:"LOGOUT" });
  }
  return (
    <nav className="top">
        <div className="topLeft">
            <img src="/assets/spiNav.png" alt="" className="topImg" />
            <ul className="topList">
              <li className="topListItem">
                {user && user.username }
              </li>
            </ul>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">
              <Link className="link" to="/write" >WRITE</Link>
            </li>
            <li className="topListItem">CONTACT</li>
            
          </ul>
        </div>
        <div className="topRight">
          <ul className="topList">
            <li className="topListItem">
              <Facebook className='topIcon topIconF' />
            </li>
            <li className="topListItem">
              <Instagram className='topIcon topIconI' />
            </li>
            <li className="topListItem">
              <Twitter className='topIcon topIconT' />
            </li>
            <li className="topListItem">
              <GitHub className='topIcon topIconG' />
            </li>
            {
              user ? (
              <Link to="/settings">
                <img
                  className="topImg"
                  src={PF+user.profilePic} 
                  alt="" 
                />
              </Link>
              
              ) : (
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                  </li>
                  <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                  </li>
                </ul>
              )
            }
            <li className="topListItem" onClick={handleLogout}>
              { user && "LOGOUT" }
            </li>
          </ul>
          <div className="lightDark">
            <LightDarkButton />
          </div>
        </div>

    </nav>
  )
}
