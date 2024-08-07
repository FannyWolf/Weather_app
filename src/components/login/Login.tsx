import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
import { useFormik } from "formik";
import { loginUser } from '../../features/auth/authAction';
import { useAppDispatch } from '../../redux/hooks';


export interface ILoginFormValues {
    username: string
    password: string
}

export default function Login() {
  const dispatch = useAppDispatch()

  // хук для перенаправления маршрутизации
  const navigate = useNavigate()
   

   const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass',
    } as ILoginFormValues,
    onSubmit: (values: ILoginFormValues, { resetForm }) => {
      // ! в values лежат данные из формы, их мы отправляем в action с post запросом

      dispatch(loginUser(values))
      // navigate дождется ответа от сервера и после
      .then(() => {
        navigate('/')
        // resetForm();
      })  
    }
  });



  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <label>Login 🔐</label>

        <input value={formik.values.username} name='username' onChange={formik.handleChange} type="text" placeholder='username' />

        <input value={formik.values.password} name='password' onChange={formik.handleChange} type="text" placeholder='password' />

        <button type='submit'>отправить</button>
      </form>
    </div>
  );
}
