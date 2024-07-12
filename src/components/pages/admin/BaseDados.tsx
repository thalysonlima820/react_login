

import useHttpUsuario from "../../../hooks/useHttpUsuario "
import Dados from "./Dados"

//i18n
import { useTranslation } from 'react-i18next';

const BaseDados = () => {

  const { t } = useTranslation();

  const {usuarios, error, handleDelete} = useHttpUsuario()

  return (
    <div>
      <h3>{t('Base')}</h3>
      {error && <p>{error}</p>}
      <div>
          <Dados usuarios={usuarios} addleDelete={handleDelete} />
      </div>
    </div>
  )
}

export default BaseDados;