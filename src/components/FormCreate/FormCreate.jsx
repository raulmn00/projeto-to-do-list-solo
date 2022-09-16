import './FormCreate.css';
import { apiHelper } from '../utils/api/Api';
import { useState } from 'react';

export function FormCreate({ setPaleta, showFormState, functionAllPaletas }) {
	const [paletaState, setPaletaCriada] = useState({});
	const handleSubmit = async (event) => {
		event.preventDefault();
		await apiHelper.createPaleta(paletaState);
		const paletas = await apiHelper.findAllPaletas();
		setPaleta(paletas);
		functionAllPaletas();
	};
	console.log(paletaState);
	return (
		<div className="form">
			{showFormState === true && (
				<form
					onSubmit={handleSubmit}
					className="form-inputs"
					id="formPaleta"
				>
					<section>
						<span>titulo:</span>
						<input
							type="text"
							name="titulo"
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									titulo: event.target.value,
								});
							}}
						></input>
					</section>
					<section>
						<span>descricao</span>
						<input
							type="text"
							name="descricao"
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									descricao: event.target.value,
								});
							}}
						></input>
					</section>
					<section>
						<span>foto:</span>
						<input
							type="text"
							name="foto"
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									foto: event.target.value,
								});
							}}
						></input>
					</section>
					<section>
						<span>preco:</span>
						<input
							type="number"
							name="preco"
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									preco: event.target.value,
								});
							}}
						></input>
						<span>sabor:</span>
						<input
							type="text"
							name="sabor"
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									sabor: event.target.value,
								});
							}}
						></input>
						<label htmlFor="possuiRecheio">Possui Recheio? </label>
						<select
							name="possuiRecheio"
							id="possuiRecheio"
							defaultValue={true}
							onChange={(event) => {
								setPaletaCriada({
									...paletaState,
									possuiRecheio: event.target.value,
								});
							}}
						>
							<option value={true}>Sim</option>
							<option value={false}>Não</option>
						</select>
						{paletaState.possuiRecheio === 'true' ? (
							<>
								<label htmlFor="recheio">
									Sabor do Recheio:{' '}
								</label>
								<input type="text" name="recheio" />
							</>
						) : null}
					</section>
					<button type="submit" className="btn-submit">
						Submit
					</button>
				</form>
			)}
		</div>
	);
}
