import './PaletaItem.css';

export function PaletaItem({
	title,
	id,
	descricao,
	preco,
	sabor,
	imagem,
	possuiRecheio,
	recheio,
}) {
	return (
		<div>
			<p>Id: {id}</p>
			<h3>Titulo: {title}</h3>
			<img src={imagem} alt="imagem da paleta" />
			<p>Descrição: {descricao}</p>
			<p>Preço: R$ {preco.toFixed(2).replace('.', ',')}</p>
			<p>Sabor: {sabor}</p>
			{possuiRecheio && <p>Recheio: {recheio}</p>}
		</div>
	);
}
