import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect } from 'react';
import { PaletaItem } from '../PaletaItem/PaletaItem';

export function PaletaLista({ paletas, setPaletas }) {
	const allPaletas = async () => {
		const response = await apiHelper.findAllPaletas();
		setPaletas(response);
		console.log('response all paletas: ', response);
	};

	useEffect(() => {
		allPaletas();
	}, []);

	return (
		<section className="secao-paletas-experimentadas">
			<h3>Paletas Experimentadas</h3>
			{paletas.map((paleta, index) => {
				return (
					<PaletaItem
						key={`paletaItem-${index}`}
						title={paleta.titulo}
					/>
				);
			})}
		</section>
	);
}
