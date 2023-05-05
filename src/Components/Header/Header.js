import React, {useState, useEffect} from 'react'
import NavBarDesktop from './NavBarDesktop'
import NavBarMobile2 from './NavBarMobile2'
import './Header.css'

function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [state, setState] = useState('cool github glitch')


  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, [isMobile]);

  return (
    <div>
    {isMobile ? (
      <NavBarMobile2 />
    ) : (
      <NavBarDesktop />
    )}
  </div>

  )
}



export default Header
