import './topbar.css'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import LightDarkButton from '../lightDarkButton/LightDarkButton'

export default function Topbar() {
  return (
    <nav className="top">
        <div className="topLeft">
            <img src="/assets/spiNav.png" alt="" className="topImg" />
            <ul className="topList">
              <li className="topListItem">
                Spython dev
              </li>
            </ul>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">BLOG POSTS</li>
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
          </ul>
          <div className="lightDark">
            <LightDarkButton />
          </div>
        </div>

    </nav>
  )
}
