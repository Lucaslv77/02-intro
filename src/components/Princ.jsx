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
						<progress value={calcularProgresso} max="100" style={{ width: '100%'}}></progress>
					</div>

					<div className="flex flex-column">
						<label for="nome">Digite seu nome</label>
						<input type="text" id="nome" onChange={(e) => setNome(e.target.value)}/>
					</div>

					<div className="flex flex-column">
						<label for="telefone" >Digite seu telefone</label>
						<input type="text" id="telefone" onChange={(e) => setNome(e.target.value)}/>
					</div>

					<div className="flex flex-column">
						<label for="telefone">Digite seu e-mail</label>
						<input type="text" id="telefone"onChange={(e) => setNome(e.target.value)} />
					</div>

					<div className="flex flex-column">
						<label for="telefone" htmlFor="senha">Digite seu senha</label>
						<input  type={senhaVisivel ? 'text' : 'password'} id="senha" />
						<button class="mostra-senha" type="button" onClick={toggleSenhaVisivel} onChange={(e) => setNome(e.target.value)}>Exibir senha</button>
					</div>

					<div className="flex termos">
						<input
							type="checkbox"
							name="aceita-termos"
							id="aceita-termos"
							onChange={handleChange} />
						<label for="aceita-termos">
							Eu li, estou ciente das condições de tratamento dos
							meus dados pessoais e dou meu consentimento, quando
							aplicável, conforme descrito nesta
						</label>
					</div>

					<div className="flex">
						<button className="botao" disabled={!termosAceitos}>
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