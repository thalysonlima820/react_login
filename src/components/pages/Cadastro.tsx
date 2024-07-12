//i18n
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useHttpUsuario from '../../hooks/useHttpUsuario ';

const Cadastro = () => {
  const { t } = useTranslation();

  const [nome, setNome] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const { handleCadastro } = useHttpUsuario();

    const handleCadastroUsuario = async (event: React.FormEvent) => {
      event.preventDefault()

      const userDados = {nome, email, senha}

      handleCadastro(userDados)

    setNome('')
    setEmail('')
    setSenha('')
  }

  return (
    <div>
      <h3>{t('CrieConta')}</h3>
      <form onSubmit={handleCadastroUsuario}>
        <div>
          <label>{t('nome')}</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>
        <div>
          <label>{t('email')}</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>{t('senha')}</label>
          <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <br />
        <button>{t('btnCadastro')}</button>
      </form>
    </div>
  )
}

export default Cadastro