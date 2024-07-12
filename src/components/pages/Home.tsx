import { useAuth } from "../../contexts/AuthContext"
//i18n
import { useTranslation } from 'react-i18next';
//navigate
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { user, logout } = useAuth()
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Sair = () => {
    logout()
    navigate('/Login');
  }

  return (
    <div>
      <h1></h1>
      {user ? (
        <div>
        <h3>{t('bv')} {user.nome}</h3>
        <button onClick={() => Sair()}>{t('sair')}</button>
        </div>
        ) : (
          <h1>{t('Faca')}</h1>
        )}
    </div>
  )
}

export default Home