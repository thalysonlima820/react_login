import { Usuario } from '../../../interface/Usuario'

//i18n
import { useTranslation } from 'react-i18next';
import { usuario } from '../../../../../0_TREINO/src/interface/usuario.iterface.ts';


type usu = {
  usuarios: Usuario[]
  addleDelete: (u: usuario) => void
}


const Dados = ({usuarios, addleDelete}: usu) => {

  const { t } = useTranslation();


  return (
    <div className='usuarios'>
      {usuarios.map((u) => (
        <div key={u.id} className='dadosUsuario'>
          <p> Nome: {u.nome}</p>
          <p> Email: {u.email}</p>
          <button onClick={() => addleDelete(u)}>{t('Delete')}</button>
        </div>
      ))}
    </div>
  )
}

export default Dados