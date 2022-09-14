import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';

export function ConteudoPrincipal({
	paletasState,
	setPaletaState,
	title,
	setTitle,
}) {
	return (
		<>
			<main className="conteudo-principal">
				<div className="conteudo-principal-container">
					<PaletaLista
						paletas={paletasState}
						setPaletas={setPaletaState}
						title={title}
						setTitle={setTitle}
					/>
				</div>
			</main>
		</>
	);
}
