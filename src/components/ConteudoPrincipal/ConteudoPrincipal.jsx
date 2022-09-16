import './ConteudoPrincipal.css';
import { PaletaLista } from '../PaletaLista/PaletaLista.jsx';
import { FormCreate } from '../FormCreate/FormCreate';

export function ConteudoPrincipal({
	paletasState,
	setPaletaState,
	title,
	setTitle,
	showFormState,
	functionAllPaletas,
}) {
	return (
		<>
			<main className="conteudo-principal">
				<div className="conteudo-principal-container">
					<FormCreate
						setPaleta={setPaletaState}
						showFormState={showFormState}
						functionAllPaletas={functionAllPaletas}
					/>
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
