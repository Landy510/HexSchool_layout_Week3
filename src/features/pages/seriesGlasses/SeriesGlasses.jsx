import { memo } from "react";
import styles from './seriesGlasses.module.scss';

const SeriesGlasses = memo(function SeriesGlasses() {
  return (
    <div className={styles['seriesGlasses_section']}>
        <div className="container">
          <ul className={
            [
              styles['tabs'],
              'font-family-roboto'
            ].join(' ')
          }>
            <li className={styles['active']}>OPTICAL</li>
            <li>SUNGLASSES</li>
            <li>FUNCTIONAL</li>
          </ul>
        </div>
        <ul className={styles['product_header']}>
          <li>
            <picture>
              <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-1.png?raw=true" />
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-1.png?raw=true" alt="" />
            </picture>
          </li>
          <li>
            <picture>
              <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-2.png?raw=true" />
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-header-sm-2.png?raw=true" alt="" />
            </picture>
          </li>
        </ul>
        <div className="modified_container">
          <div className={styles['product_section']}>
            <h3 className={styles['title']}>
              <p className="font-family-roboto">Celluloid Combi</p>
              <p>賽璐珞鈦金屬混合鏡框</p>
            </h3>
            <ul className={styles['product_list']}>
              <li>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-1.png?raw=true" alt="" />
                <div className={styles['container_card_content']}>
                  <p className={styles['price_info']}>
                    <span>BJ41600S</span>
                    <span>NTD3,490</span>
                  </p>
                  <div className={styles['palette']}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-2.png?raw=true" alt="" />
                <div className={styles['container_card_content']}>
                  <p className={styles['price_info']}>
                    <span>BJ41600S</span>
                    <span>NTD3,490</span>
                  </p>
                  <div className={styles['palette']}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-3.png?raw=true" alt="" />
                <div className={styles['container_card_content']}>
                  <p className={styles['price_info']}>
                    <span>BJ41600S</span>
                    <span>NTD3,490</span>
                  </p>
                  <div className={styles['palette']}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-4.png?raw=true" alt="" />
                <div className={styles['container_card_content']}>
                  <p className={styles['price_info']}>
                    <span>BJ41600S</span>
                    <span>NTD3,490</span>
                  </p>
                  <div className={styles['palette']}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
              <li>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/product-5.png?raw=true" alt="" />
                <div className={styles['container_card_content']}>
                  <p className={styles['price_info']}>
                    <span>BJ41600S</span>
                    <span>NTD3,490</span>
                  </p>
                  <div className={styles['palette']}>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className={styles['pagination']}>
          <div>上一頁</div>
          <ul>
            <li>1</li>
            <li className={styles['active']}>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <div>下一頁</div>
        </div>
        </div>
      </div>
  ) 
})

export default SeriesGlasses;