import './App.css';
import { Header } from './components/Header/Header.jsx';
import { ConteudoPrincipal } from './components/ConteudoPrincipal/ConteudoPrincipal.jsx';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import { apiHelper } from './components/utils/api/Api';

export function App() {
	const [paletas, setPaletas] = useState([]);

	const allPaletas = async () => {
		const response = await apiHelper.findAllPaletas();
		setPaletas(response);
		console.log('response all paletas: ', response);
	};
	return (
		<>
			<div className="container-to-do-list">
				<div className="header-to-do-list">
					<Header
						setPaletasState={setPaletas}
						functionAllPaletas={allPaletas}
					/>
				</div>
				<div className="main-content">
					<ConteudoPrincipal
						paletasState={paletas}
						setPaletaState={setPaletas}
					/>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		</>
	);
}
