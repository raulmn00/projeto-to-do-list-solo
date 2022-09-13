import './PaletaItem.css';

export function PaletaItem({ title, id, descricao, preco, sabor, imagem }) {
	return (
		<div>
			<p>Id: {id}</p>
			<h3>Titulo: {title}</h3>
			<img src={imagem} alt="imagem da paleta" />
			<p>Descrição: {descricao}</p>
			<p>Preço: R$ {preco}</p>
			<p>Sabor: {sabor}</p>
		</div>
	);
}
