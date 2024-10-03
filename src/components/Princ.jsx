import { useState } from 'react'
import './style.css';

function Princ() {
  const [count, setCount] = useState(0)
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [termosAceitos, setTermosAceitos] = useState(false);
  const [nome, setNome] = useState('');
  const [email,  setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');

  // Função para alternar a visibilidade da senha
  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  // Função para alterar o estado quando a caixa de seleção for marcada/desmarcada
  const handleChange = (e) => {
	setTermosAceitos(e.target.checked);
  };

  // Calcula o número de campos preenchidos
  const calcularProgresso = () => {
  let progresso = 0;
  if (nome !== "") progresso +=1;
  if (email !== "") progresso +=1;
  if (telefone !== "") progresso +=1;
  if (senha !== "") progresso +=1;
  return (progresso / 4) * 100;
}

// Método para finalizar o formulário
const finalizarFormulario = () => {
    if (
      nome && 
      email && 
      telefone && 
      senha && 
      termosAceitos
    ) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos.');
    }
  };

  return (
    <>
    <main className="flex">
			
			<aside className="flex flex-column">
				<div className="flex flex-column">
					<div className="logo">
						<a href="/">
							<img src="img/logo.svg" />
						</a>
					</div>
					<div className="titulo">
						<h1>
							Complete os campos ao lado para abrir sua Conta
							Digital
						</h1>
						<p class="subtitulo">
							Aqui, você acontece com segurança e toda a
							praticidade que o Digital Bank oferece. Mais do que
							uma conta com cartão, você tem uma experiência
							completa com investimentos, Mimos exclusivos e muito
							mais.
						</p>
					</div>
					<small
						>&copy; Criado por Nome do Aluno e Matrícula
						000000000</small>
				</div>
			</aside>
			



			<div className="flex flex-column">
				<div className="formulario flex flex-column">
					<div className="progresso">
						<label className="">Preencha os campos</label>
						<progress value={calcularProgresso()} max="100" style={{ width: '100%' }}></progress>
						<p>{calcularProgresso()}% completo</p>
					</div>

					<div className="flex flex-column">
						<label for="nome" htmlFor="nome">Digite seu nome</label>
						<input  type="text"
          						id="nome"
          						value={nome}
          						onChange={(e) => setNome(e.target.value)}/>
					</div>

					<div className="flex flex-column">
						<label for="telefone" htmlFor="telefone">Digite seu telefone</label>
						<input  type="text"
          						id="telefone"
          						value={telefone}
         	 					onChange={(e) => setTelefone(e.target.value)}/>
					</div>

					<div className="flex flex-column">
						<label for="email" htmlFor="email">Digite seu e-mail</label>
						<input type="email"
          						id="email"
          						value={email}
          						onChange={(e) => setEmail(e.target.value)} />
					</div>

					<div className="flex flex-column">
						<label for="senha" htmlFor="senha">Digite seu senha</label>
						<input  type={senhaVisivel ? 'text' : 'password'} id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
						<button class="mostra-senha" type="button" onClick={toggleSenhaVisivel} onChange={(e) => setNome(e.target.value)}>Exibir senha</button>
					</div>

					<div className="flex termos">
						<input
							type="checkbox"
							id="aceita-termos"
							checked={termosAceitos}
							onChange={(e) => setTermosAceitos(e.target.checked)}
						  />
						<label for="aceita-termos">
							Eu li, estou ciente das condições de tratamento dos
							meus dados pessoais e dou meu consentimento, quando
							aplicável, conforme descrito nesta
						</label>
					</div>

					<div className="flex">
						<button className="botao" type="button" onClick={finalizarFormulario} disabled={!termosAceitos}>
							Aceite os termos
						</button>
					</div>
				</div>
			</div>
		</main>
    </>
)
}

export default Princ