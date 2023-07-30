import { memo } from "react";
import { Link } from "react-router-dom";
import headerLogo from '/header_logo.png';
import styles from './header.module.scss';

const Header = memo(function Header() {
  return (
    <header className={styles['header']}>
      <div 
        // className={['container', styles['header-container']].join(' ')}
        className='container'
      >
        <div className={styles['header_content_wrapper']}>
          <Link 
            to={'/'}
            className={styles['logo-img']}
          >
            <img 
              src={headerLogo} 
              alt="" 
              width='80'
            />
          </Link>
          
          <ul className={styles['list']}>
            <li>
              <Link to={'/seriesGlasses'}>
                系列鏡框
              </Link>
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
        
      </div>
    </header>
  )
})

export default Header;