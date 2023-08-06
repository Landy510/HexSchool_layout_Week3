import { memo } from "react";
import styles from './footer.module.scss';

const Footer = memo(function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className={styles['company_info_section']}>
        <div className={styles['interactions']}>
            <ul>
              <li><a href="">首頁</a></li>
              <li><a href="">系列鏡框</a></li>
              <li><a href="">門市據點</a></li>
              <li><a href="">門市據點</a></li>
              <li><a href="">常見問題</a></li>
            </ul>
            <div className={styles['icons']}>
              <a href="">
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic-social-fb.png?raw=true" 
                  alt="" 
                />
              </a>
              <a href="">
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_ig.png?raw=true" 
                  alt="" 
                />
              </a>
              <a href="">
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/ic_social_line.png?raw=true" 
                  alt="" 
                />
              </a>
            </div>
            
          </div>
          <div className={styles['company_info']}>
            <div>
              <p>
                <span className="material-symbols-outlined">
                  call
                </span>
                <a href="tel:0800-000-00">0800-000-00</a>
                
              </p>
              <p>
                <span className="material-symbols-outlined">
                  mail
                </span>
                <a href="mailto:glasses@business.com">glasses@business.com</a>
              </p>
            </div>
          </div>
          
        </div> 
        <div className={styles['protocol_section']}>
          <p>Copyright © 2020 Glasses.All rights reserved.</p>
          <div>
            <p>隱私權政策</p>
            <p>服務條款</p>
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer;