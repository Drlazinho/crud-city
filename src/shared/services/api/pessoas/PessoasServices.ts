import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

interface IDetalhePessoa  {
  id: number;
  nomeCompleto: string;
  email: string;
  cidadeId: number;
}

type IPessoasComTotalCount = {
  data: IListagemPessoa[];
  totalCount:number;
}

const getAll = async(page = 1, filter = ''): Promise<IPessoasComTotalCount | Error> => {
  try {
    const urlRelativa =`/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const {data, headers} = await Api.get(urlRelativa);

    if(data) {
      return {
        data,
        totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
      };
    }

    return new Error('Erro ao listar os registros.')
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string}).message || 'Erro ao listar os registros.')

  }
};

const getById = async(id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const {data} = await Api.get(`/pessoas/${id}`);

    if(data) {
        return data;
    }

    return new Error('Erro ao consultar os registros.')
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string}).message || 'Erro ao consultar os registros.')

  }
};

const create = async(dados: Omit<IDetalhePessoa, 'id'>): Promise<number | Error> => {
  try {
    const {data} = await Api.post<IDetalhePessoa>(`/pessoas`, dados);

    if(data) {
        return data.id;
    }

    return new Error('Erro ao criar registro.')
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string}).message || 'Erro ao criar registro.')
  }
};

const updateById = async(id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  try {
    await Api.put(`/pessoas/${id}`, dados);
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string}).message || 'Erro ao atualizar registro.')
  }
};

const deleteById = async(id: number): Promise<any> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.log(error);
    return new Error((error as { message: string}).message || 'Erro ao apagar registro.')
  }
};

export const PessoasService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}