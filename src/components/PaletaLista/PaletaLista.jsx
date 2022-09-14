import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect } from 'react';
import { PaletaItem } from '../PaletaItem/PaletaItem';
import { Title } from '../Title/Title.jsx';

export function PaletaLista({ paletas, setPaletas, setTitle, title }) {
	const allPaletas = async () => {
		const response = await apiHelper.findAllPaletas();
		setPaletas(response);
		console.log(response);
		setTitle('Todas as Paletas');
	};

	useEffect(() => {
		allPaletas();
	}, []);

	return (
		<section className="secao-paletas-experimentadas">
			<Title text={title} />
			{paletas.map((paleta, index) => {
				return (
					<PaletaItem
						key={`paletaItem-${index}`}
						id={paleta._id}
						title={paleta.titulo}
						descricao={paleta.descricao}
						preco={paleta.preco}
						sabor={paleta.sabor}
						imagem={paleta.foto}
					/>
				);
			})}
		</section>
	);
}
