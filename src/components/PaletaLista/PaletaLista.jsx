import './PaletaLista.css';
import { apiHelper } from '../utils/api/Api';
import { useEffect, useState } from 'react';
import { PaletaItem } from '../PaletaItem/PaletaItem';
import { Title } from '../Title/Title.jsx';
import Modal from 'react-modal';
import { CgClose } from 'react-icons/cg';
const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		background: 'rgba(0,0,0,0.8)',
		color: 'white',
		display: 'flex',
		justifyContent: 'center',
		borderRadius: '15px',
		width: '30%',
	},
	overlay: {
		background: 'rgba(0,0,0,0.4)',
	},
};
Modal.setAppElement('#root');

export function PaletaLista({ paletas, setPaletas, setTitle, title }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [uniquePaleta, setUniquePaleta] = useState([]);
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
								setUniquePaleta(paleta);
								handleModal();
							}}
						>
							<PaletaItem
								id={paleta._id}
								title={paleta.titulo}
								descricao={paleta.descricao}
								possuiRecheio={paleta.possuiRecheio}
								recheio={paleta.recheio}
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
				<section
					style={{
						display: 'flex',
						width: '100%',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}
				>
					<button
						style={{
							backgroundColor: 'transparent',
							cursor: 'pointer',
							border: 'none',
						}}
						onClick={handleModal}
					>
						<CgClose size={28} color="red" />
					</button>
					<p>Id: {uniquePaleta._id}</p>
					<h3>Titulo: {uniquePaleta.titulo}</h3>
					<img src={uniquePaleta.foto} alt="imagem da paleta" />
					<p>Descrição: {uniquePaleta.descricao}</p>
					<p>Preço: R$ {uniquePaleta.preco}</p>
					<p>Sabor: {uniquePaleta.sabor}</p>
					{uniquePaleta.possuiRecheio && (
						<p>Recheio: {uniquePaleta.recheio}</p>
					)}
				</section>
			</Modal>
		</>
	);
}
