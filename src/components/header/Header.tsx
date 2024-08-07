import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { links } from './links';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logoutUser } from '../../features/auth/authSlice';




export default function Header() {
  const { user } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch()
  const location = useLocation();

  
  const handleLogout = () => {
    // чистим браузерное хранилище данных
    localStorage.removeItem('user-token')

    // чистим state, 'выносим мусор' данных за пользователем
    dispatch(logoutUser())
  }
  return (
    <header className={styles.header}>
      {user.username && <span>{user.username}</span>}
      {/* через тернарный оператор проверяем наличие данных по user и показываем или login или интерфейс для авторизированного юзера */}
      {user.username ? (
        <>
      
      <span>Weather App 🏖</span>
      <div className={styles.divStyle}>
        {links.map((el, index) => (
          <Link
            key={index}
            className={location.pathname === el.pathname ? styles.active : ''}
            to={el.pathname}>{el.title}</Link>
        ))}
      </div>
      <Link onClick={handleLogout} to='/login'>logout</Link>
      </>
      ) : (
        <Link to='/login'>Login</Link>
      )}
    </header>
  );
}

