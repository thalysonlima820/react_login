import { useState, useEffect, useCallback } from "react";
import { Usuario } from "../interface/Usuario";
import axios from "axios";

type operationProps = "add" | "delete"

const api = 'https://fiancer.online/slim_api/public/v1/usuarios'

const useHttpUsuario = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [error, setError] = useState<string>("")

  const handleSuccess = (dados: Usuario, operation: operationProps) => {
    if (operation === "add") {
      setUsuarios((dadosUsuarios) => [dados, ...dadosUsuarios]);
    } else if (operation === "delete") {
      setUsuarios((dadosUsuario) => dadosUsuario.filter((u) => u.id !== dados.id))
    }
  };

  const handleBusca = useCallback(async () => {
    try {
      const pesquisa = await axios.get(`${api}/lista`);
      setUsuarios(pesquisa.data);
    } catch (error) {
      setError('Banco de dados indisponível');
    }
  }, []);

  const handleCadastro = async (userDados) => {


    const Cadastrar = await axios.post(
      `${api}/adicionar`,
      userDados
    )
    handleSuccess(Cadastrar.data, "add")

  }

  const handleDelete = async (userId: Usuario) => {
    try {
      await axios.get(
        `${api}/remover/${userId.id}`
      );
      handleSuccess(userId, "delete");
    } catch (error) {
      console.log("erro", error);
    }
  }

  useEffect(() => {
    handleBusca();
  }, []);

  return { usuarios, error, handleDelete, handleCadastro }

}

export default useHttpUsuario;