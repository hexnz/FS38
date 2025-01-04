
import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [municipios, setMunicipios] = useState([]); // Estado para armazenar os municípios
  const [loading, setLoading] = useState(true); // Estado para controle de carregamento
  const [selectedMunicipio, setSelectedMunicipio] = useState(""); // Estado para armazenar o município selecionado

  // ID do estado de São Paulo (exemplo)
  const estadoId = 35; // São Paulo

  // URL da API do IBGE para consultar os municípios de um estado
  const apiUrl = `https://cors-anywhere.herokuapp.com/https://servicodados.ibge.gov.br/api/v2/censos/municipais/2020/estados/35/municipios`;

  // Fazendo a requisição GET para a API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro ao fazer requisição: ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Dados de municípios:', data);
      setMunicipios(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Erro:', error);
      setLoading(false);
    }); // O array vazio [] significa que a requisição será feita apenas uma vez, ao montar o componente

  // Função para tratar o evento de seleção de município
  const handleMunicipioChange = (e) => {
    setSelectedMunicipio(e.target.value);
    console.log('Município selecionado:', e.target.value);
  }

return (
  <>
    <form>
      <h1>Cadastro Pessoal</h1>
      <header>
        <div className="DadosPessoais">
          <label htmlFor="nomeCliente">Nome</label>
          <input htmlFor="nomeCliente" type="text" />
          <label htmlFor="DataNasc">Nascimento</label>
          <input htmlFor="DataNasc" type="date" />
          <label htmlFor="CpfValue">CPF</label>
          <input htmlFor="CpfValue" type="tel" />
        </div>

        <div className="DadosdoBairro">
          <label htmlFor="Municipio">Selecione seu Município</label>
          <select
            name="Municipio"
            value={selectedMunicipio}
            onChange={handleMunicipioChange}
            disabled={loading} // Desabilita o select enquanto os dados estão carregando
          >
            {loading ? (
              <option value="">Carregando...</option> // Exibe "Carregando..." enquanto os dados não chegam
            ) : (
              // Exibe todas as opções de municípios
              municipios.map((municipio) => (
                <option key={municipio.id} value={municipio.id}>
                  {municipio.nome}
                </option>
              ))
            )}
          </select>
        </div>
      </header>
    </form>
  </>
);

};
