import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
