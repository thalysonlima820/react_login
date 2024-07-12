//react
import { useState } from 'react';
//svg
import menu from '../public/menu.svg'
import cruz from '../public/cruz.svg'
//i18n
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
//link
import { Route, Routes, Link } from "react-router-dom";
//components page
import BaseDados from './components/pages/admin/BaseDados';
import Cadastro from './components/pages/Cadastro';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import PrivateRoute from './components/PrivateRoute';

import { AuthProvider } from './contexts/AuthContext';


function App() {


  const [menuAtivo, setMenuAtivo] = useState<boolean>(true)

  const { t } = useTranslation();

  return (
    <AuthProvider>
      <nav>
        <div className='boxHome'>

          {menuAtivo
            ? (
              <img src={menu} alt="" onClick={() => setMenuAtivo(false)} />
            )
            : (
              <div className='box_nav'>
                <img src={cruz} alt="" onClick={() => setMenuAtivo(true)} />
                <p><Link to='/Login'>{t('Login')}</Link></p>
                <p><Link to='/'>{t('Home')}</Link></p>
                <p><Link to='/dados'>{t('DadosUsu')}</Link></p>
                <p><Link to='/cadastro'>{t('cadastro')}</Link></p>
              </div>
            )
          }
        </div>
        <h1>{t('logo')}</h1>
        <LanguageSwitcher />
      </nav>

      <header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/dados' element={<PrivateRoute><BaseDados /></PrivateRoute>} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </header>


    </AuthProvider>
  )
}

export default App
