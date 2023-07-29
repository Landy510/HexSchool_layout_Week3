import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './App.module.scss';

function App() {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
