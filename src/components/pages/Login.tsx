// Login.tsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import md5 from 'crypto-js/md5';
import useHttpUsuario from '../../hooks/useHttpUsuario ';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { t } = useTranslation();
  const { usuarios } = useHttpUsuario();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [loginError, setLoginError] = useState('');

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const senhaHash = md5(senha).toString();
    const usuario = usuarios?.find((usuario) => usuario.nome === nome && usuario.senha === senhaHash);
    if (usuario) {
      login(usuario);
      navigate('/dados');
    } else {
      setLoginError(t('Erro no login'));
    }
  };

  return (
    <div>
      <h1>{t('logar')}</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>{t('nome')}</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>{t('senha')}</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <button type="submit">{t('btnlogin')}</button>
        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      </form>
    </div>
  );
};

export default Login;
