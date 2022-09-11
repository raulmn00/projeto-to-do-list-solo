import './Header.css';
import { apiHelper } from '../utils/api/Api';

export function Header({ setPaletasState }) {
	const paletaById = async () => {
		const input = document.querySelector('#idPaleta');
		const id = input.value;
		const response = await apiHelper.findPaletaById(id);
		setPaletasState([response]);
	};
	return (
		<>
			<div className="header-container">
				<h2 className="header-title">HEADER</h2>
				<nav className="navbar">
					<p>Todas as paletas</p>
					<p>Excluir paleta</p>
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
				</nav>
			</div>
		</>
	);
}
