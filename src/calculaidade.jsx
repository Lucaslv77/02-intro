import React, { useState } from 'react';

const CalculaIdade = () => {
  // Estados para ano e mês atuais
  const [anoAtual] = useState(2014);
  const [mesAtual] = useState('setembro');
  
  // Estados para o ano e mês de nascimento
  const [anoNascimento, setAnoNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');

  // Estado para a idade calculada
  const [mensagem, setMensagem] = useState('');

  // Mapeia os meses com seus valores numéricos
  const meses = [
    { nome: 'Janeiro', valor: '01' },
    { nome: 'Fevereiro', valor: '02' },
    { nome: 'Março', valor: '03' },
    { nome: 'Abril', valor: '04' },
    { nome: 'Maio', valor: '05' },
    { nome: 'Junho', valor: '06' },
    { nome: 'Julho', valor: '07' },
    { nome: 'Agosto', valor: '08' },
    { nome: 'Setembro', valor: '09' },
    { nome: 'Outubro', valor: '10' },
    { nome: 'Novembro', valor: '11' },
    { nome: 'Dezembro', valor: '12' }
  ];

  const calcularIdade = (anoNascimento, mesNascimento) => {
    let idadeCalculada = anoAtual - anoNascimento;

    // Comparar o mês do aniversário com o mês atual
    const mesAtualValor = meses.find(mes => mes.nome.toLowerCase() === mesAtual.toLowerCase()).valor;

    if (mesNascimento > mesAtualValor) {
      setMensagem(`Você tem ${idadeCalculada - 1} anos.`);
    } else if (mesNascimento === mesAtualValor) {
      setMensagem(`Você tem ${idadeCalculada} anos e completará aniversário este mês.`);
    } else {
      setMensagem(`Você tem ${idadeCalculada} anos.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calcularIdade(anoNascimento, mesNascimento);
  };

  return (
    <div>
      <h2>Calcular Idade</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="anoNascimento">Ano de Nascimento:</label>
        <input
          type="number"
          id="anoNascimento"
          value={anoNascimento}
          onChange={(e) => setAnoNascimento(e.target.value)}
          placeholder="Ex: 1980"
        />

        <label htmlFor="mesNascimento">Mês de Nascimento:</label>
        <select
          id="mesNascimento"
          value={mesNascimento}
          onChange={(e) => setMesNascimento(e.target.value)}
        >
          <option value="">Selecione o mês</option>
          {meses.map((mes) => (
            <option key={mes.valor} value={mes.valor}>
              {mes.nome}
            </option>
          ))}
        </select>

        <button type="submit">Descobrir a idade</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default CalculaIdade;
