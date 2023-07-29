import { memo } from "react";
import headerLogo from '/header_logo.png';
import styles from './header.module.scss';

const Header = memo(function Header() {
  return (
    <header className={styles['header']}>
      <div 
        className={['container', styles['header-container']].join(' ')}
      >
        <a 
          href="#"
          className={styles['logo-img']}
        >
          <img 
            src={headerLogo} 
            alt="" 
            width='80'
          />
        </a>
        
        <ul className={styles['list']}>
          <li>
            <a href="">
              系列鏡框
            </a>
          </li>
          <li>
            <a href="">
            門市據點
            </a>
          </li>
          <li>
            <a href="">
            部落格
            </a>
          </li>
          <li>
            <a href="">
              常見問題
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
})

export default Header;