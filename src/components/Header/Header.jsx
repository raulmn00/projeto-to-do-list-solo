import './Header.css';
import { apiHelper } from '../utils/api/Api';

export function Header({
	setPaletasState,
	functionAllPaletas,
	setTitle,
	setShowForm,
	showFormState,
}) {
	const paletaById = async () => {
		const input = document.querySelector('#idPaleta');
		const id = input.value;
		const response = await apiHelper.findPaletaById(id);
		setPaletasState([response]);
		setTitle('Paleta Selecionada');
	};

	const handleShowForm = () => {
		setShowForm(!showFormState);
	};

	const excluirPaleta = async () => {
		const input = document.querySelector('#excluirPaleta');
		const id = input.value;
		await apiHelper.deletePaleta(id);
		alert('Paleta deletada com sucesso!');
		functionAllPaletas();
	};

	return (
		<>
			<div className="header-container">
				<h2 className="header-title">HEADER</h2>
				<nav className="navbar">
					<button type="button" onClick={functionAllPaletas}>
						Todas as paletas
					</button>
					<div className="deletePaleta">
						<label htmlFor="excluirPaleta">Excluir Paleta: </label>
						<input
							type="text"
							name="excluirPaleta"
							id="excluirPaleta"
							placeholder="Digite o ID: "
						/>
						<button type="button" onClick={excluirPaleta}>
							Deletar
						</button>
					</div>
					<div className="findById">
						<label htmlFor="findById">Digite o ID: </label>
						<input
							name="findById"
							type="text"
							placeholder="Digite o Id: "
							id="idPaleta"
						/>
						<button type="button" onClick={paletaById}>
							Procurar
						</button>
					</div>
					<button
						onClick={() => {
							handleShowForm();
						}}
					>
						CRIAR PALETA
					</button>
				</nav>
			</div>
		</>
	);
}
