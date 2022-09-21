import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect, useState } from 'react';
import { PaletaItem } from '../PaletaItem/PaletaItem';
import { Title } from '../Title/Title.jsx';
import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
	overlay: {
		background: 'rgba(0,0,0,0.4)',
	},
};
Modal.setAppElement('#root');

export function PaletaLista({ paletas, setPaletas, setTitle, title }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const allPaletas = async () => {
		const response = await apiHelper.findAllPaletas();
		setPaletas(response);
		console.log(response);
		setTitle('Todas as Paletas');
	};

	const handleModal = () => {
		setModalIsOpen(!modalIsOpen);
	};

	useEffect(() => {
		allPaletas();
	}, []);

	return (
		<>
			<section className="secao-paletas-experimentadas">
				<Title text={title} />
				{paletas.map((paleta, index) => {
					return (
						<button
							className="paletaItemContainer button-card"
							key={`paletaItem-${index}`}
							onClick={() => {
								handleModal();
							}}
						>
							<PaletaItem
								id={paleta._id}
								title={paleta.titulo}
								descricao={paleta.descricao}
								preco={paleta.preco}
								sabor={paleta.sabor}
								imagem={paleta.foto}
							/>
						</button>
					);
				})}
			</section>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={handleModal}
				style={customStyles}
				contentLabel="Conteudo do Modal"
			>
				<section></section>
			</Modal>
		</>
	);
}
