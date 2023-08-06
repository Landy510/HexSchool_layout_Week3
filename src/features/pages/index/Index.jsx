import styles from './index.module.scss';

const Index = () => {
  return (
    <>
      <div className={styles['hero_image']}>
        <div className={['container', styles['h-full']].join(' ')}>
          <div className={[styles['content'], styles['h-full']].join(' ')}>
            <p>Promise-Desert 2020 早春系列</p>
            <h2>看得清，才能看得遠</h2>
            <a href="#">立即購買</a>
          </div>
        </div>
      </div>
      <section className={styles['character_section']}>
        <div className="container">
          <h3 className={styles['title']}>
            用專業的心，做專業的事
          </h3>

          {/* <div className={styles['content_wrapper']}>
            <div className={styles['card']}>
              <div className={styles['img']}>
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-1.png?raw=true" 
                  alt="" 
                  width={84}
                  height={84}
                />
                <p className={styles['slogan']}>單一價格</p>
              </div>
              <p>
              無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。
              </p>
            </div>

            <div className={styles['card']}>
              <div className={styles['img']}>
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-2.png?raw=true" 
                  alt="" 
                  width={84}
                  height={84}
                />
                <p className={styles['slogan']}>20 分鐘即可取件</p>
              </div>
              <p>
              為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。
              </p>
            </div>

            <div className={styles['card']}>
              <div className={styles['img']}>
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-3.png?raw=true" 
                  alt="" 
                  width={84}
                  height={84}
                />
                <p className={styles['slogan']}>安心售後服務</p>
              </div>
              <p>
              我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </div>

            <div className={styles['card']}>
              <div className={styles['img']}>
                <img 
                  src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-sectioin2-4.png?raw=true" 
                  alt="" 
                  width={84}
                  height={84}
                />
                <p className={styles['slogan']}>關於鏡片</p>
              </div>
              <p>
              使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。
              </p>
            </div>
            
          </div> */}
          <ul className={styles['content_wrapper']}>
              <li className={styles['card']}>
                <div className={styles['img']}>
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-1.png?raw=true" 
                    alt="" 
                    width={84}
                    height={84}
                  />
                  {/* <p className={styles['slogan']}>單一價格</p> */}
                  <h3 className={styles['slogan']}>單一價格</h3>
                </div>
                <p>
                無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。
                </p>
              </li>

              <li className={styles['card']}>
                <div className={styles['img']}>
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-2.png?raw=true" 
                    alt="" 
                    width={84}
                    height={84}
                  />
                  {/* <p className={styles['slogan']}>20 分鐘即可取件</p> */}
                  <h3 className={styles['slogan']}>20 分鐘即可取件</h3>
                </div>
                <p>
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。
                </p>
              </li>

              <li className={styles['card']}>
                <div className={styles['img']}>
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section2-3.png?raw=true" 
                    alt="" 
                    width={84}
                    height={84}
                  />
                  {/* <p className={styles['slogan']}>安心售後服務</p> */}
                  <h3 className={styles['slogan']}>安心售後服務</h3>
                </div>
                <p>
                我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
                </p>
              </li>

              <li className={styles['card']}>
                <div className={styles['img']}>
                  <img 
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-sectioin2-4.png?raw=true" 
                    alt="" 
                    width={84}
                    height={84}
                  />
                  {/* <p className={styles['slogan']}>關於鏡片</p> */}
                  <h3 className={styles['slogan']}>關於鏡片</h3>
                </div>
                <p>
                使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。
                </p>
              </li>
          </ul>
        </div>
        
        
      </section>

      <section className={styles['classic_section']}>
        <div className="container">
          <h3 className={styles['title']}>
            經典系列鏡框
          </h3>

          {/* <div className={styles['classic_content_wrapper']}>
            <div className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true" alt="" />
              <p className='font-family-roboto'>Optical</p>
            </div>
            <div className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true" alt="" />
              <p className='font-family-roboto'>SUNGLASSES</p>
            </div>
            <div className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true" alt="" />
              <p className='font-family-roboto'>FUNCTIONAL</p>
            </div>
          </div> */}
          <ul className={styles['classic_content_wrapper']}>
            <li className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-1.png?raw=true" alt="" />
              <h3 className='font-family-roboto'>Optical</h3>
            </li>
            <li className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-2.png?raw=true" alt="" />
              <h3 className='font-family-roboto'>SUNGLASSES</h3>
            </li>
            <li className={styles['card']}>
              <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section3-3.png?raw=true" alt="" />
              <h3 className='font-family-roboto'>FUNCTIONAL</h3>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles['designed_section']}>
        <div className="container">
          <h3 className={styles['title']}>
            聯名設計鏡框
          </h3>

          {/* <div className={styles['designed_content_wrapper']}>
            <div className={styles['card']}>
              <picture>
                <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true" />
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true" alt="" />
              </picture>
              <p className='font-family-roboto'>Double A+</p>
            </div>
            <div className={styles['card']}>
              <picture>
                <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true" />
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true" alt="" />
              </picture>
              <p className='font-family-roboto'>Youth</p>
            </div>
          </div> */}
          <ul className={styles['designed_content_wrapper']}>
            <li className={styles['card']}>
              <picture>
                <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1.png?raw=true" />
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-1-sm.png?raw=true" alt="" />
              </picture>
              <h3 className='font-family-roboto'>Double A+</h3>
            </li>
            <li className={styles['card']}>
              <picture>
                <source media="(min-width:992px)" srcSet="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2.png?raw=true" />
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section4-2-sm.png?raw=true" alt="" />
              </picture>
              <h3 className='font-family-roboto'>Youth</h3>
            </li>
          </ul>
        </div>
        
      </section>

      <section className={styles['customer_section']}>
        <div className="container">
          <h3 className={styles['title']}>顧客推薦</h3>
          {/* <div className={styles['customer_content_wrapper']}>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-1.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>Jessy</p>
                    <p className={styles['comment']}>眼鏡品質優良，下次還會想來這邊購買！</p>
                  </div>
                  
                  <p className={styles['date']}>2021/06/20</p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-2.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>凱倫</p>
                    <p className={styles['comment']}>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
                  </div>
                  
                  <p className={styles['date']}>2021/06/20</p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-3.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>悠悠</p>
                    <p className={styles['comment']}>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
                  </div>
                  
                  <p className={styles['date']}>2021/06/20</p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-4.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>Kyuan</p>
                    <p className={styles['comment']}>服務很好，品質沒有任何問題，非常喜歡。</p>
                  </div>
                  
                  <p className={styles['date']}>2021/06/20</p>
              </div>
              </div>
            </div>
          </div> */}
          <ul className={styles['customer_content_wrapper']}>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-1.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>Jessy</p>
                    <p className={styles['comment']}>眼鏡品質優良，下次還會想來這邊購買！</p>
                  </div>
                  
                  <p className={styles['date']}>
                    <time>2021/06/20</time>
                  </p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-2.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>凱倫</p>
                    <p className={styles['comment']}>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
                  </div>
                  
                  <p className={styles['date']}>
                    <time>2021/06/20</time>
                  </p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-3.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>悠悠</p>
                    <p className={styles['comment']}>謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！</p>
                  </div>
                  
                  <p className={styles['date']}>
                    <time>2021/06/20</time>
                  </p>
              </div>
              </div>
            </div>
            <div className={styles['card']}>
              <div className={styles['card_inner']}>
                <picture className={styles['container_card_img']}>
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/week3-4/home-section5-4.png?raw=true" alt="" />
                </picture>
                <div className={styles['container_card_text']}>
                  <div>
                    <p className={styles['name']}>Kyuan</p>
                    <p className={styles['comment']}>服務很好，品質沒有任何問題，非常喜歡。</p>
                  </div>
                  
                  <p className={styles['date']}>
                    <time>2021/06/20</time>
                  </p>
              </div>
              </div>
            </div>
          </ul>
        </div>
      </section>

      <section className={styles['contact_section']}>
        <div className="container">
        <div className={styles['contact_content_wrapper']}>
          <h3 className={styles['title']}>
            聯絡我們
          </h3>
          <p>
            我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
          </p>

          <form onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor='name'>姓名 </label>
              <input 
                type="text" 
                id='name'
                placeholder='陳小明'
              />
            </div>
            <div>
              <label htmlFor='tel'>連絡電話 </label>
              <input 
                type="tel" 
                placeholder='0912-345-678'
                id='tel'
              />
            </div>
            <div>
              <label htmlFor='email'>電子郵件 </label>
              <input 
                type="email" 
                id='email'
                placeholder='example@email.com'
              />
            </div>
            <div>
              <label htmlFor="reaction">意見反應</label>
              <textarea 
                id="reaction" 
                cols="30" 
                rows="10"
                placeholder='請輸入您的意見'
              ></textarea>
            </div>
            <div>
              <input 
                type="checkbox" 
                id='protocol'
              />
                
              <label htmlFor="protocol">
              我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
              </label>
            </div>
            <input type="submit" value='確定送出'/>
          </form>  
        </div>
          
        </div>
      </section>
    </>
    
  )
}

export default Index;