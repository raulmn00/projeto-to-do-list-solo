import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';

export function ConteudoPrincipal({ paletasState, setPaletaState }) {
	return (
		<>
			<main className="conteudo-principal">
				<div className="conteudo-principal-container">
					<PaletaLista
						paletas={paletasState}
						setPaletas={setPaletaState}
					/>
				</div>
			</main>
		</>
	);
}
