import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import WeatherApp from './components/weatherApp/WeatherApp';
import WeatherProvider from './components/weatherProvider/WeatherProvider';
import './index.css';
import WeatherFavorites from './components/weatherFavorites/WeatherFavorites';
import { Provider } from 'react-redux';
import { store } from './redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <WeatherProvider>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<WeatherApp />} />
          <Route path='/shop' element={<WeatherFavorites/>} />
          <Route path='*' element={<h1>Error 404 😵</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </WeatherProvider>
  </Provider>
);


