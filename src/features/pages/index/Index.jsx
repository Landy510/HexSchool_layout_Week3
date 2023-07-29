import styles from './index.module.scss';

const Index = () => {
  return (
    <div className={styles['hero_image']}>
      <div className={['container', styles['h-full']].join(' ')}>
        <div className={[styles['content'], styles['h-full']].join(' ')}>
          <p>Promise-Desert 2020 早春系列</p>
          <h2>看得清，才能看得遠</h2>
          <a href="#">立即購買</a>
        </div>
      </div>
    </div>
  )
}

export default Index;