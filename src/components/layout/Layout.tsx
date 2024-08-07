import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';
import styles from './layout.module.css';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { getUserWithToken } from '../../features/auth/authAction';



function Layout() {
  const location = useLocation()
  console.log(location.pathname);
  const dispatch = useAppDispatch()
  useEffect(()=>{
      const token = localStorage.getItem("userToken")
      if (token !== null){
          dispatch(getUserWithToken(token))
      }
  },[])
  
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
export default Layout;

