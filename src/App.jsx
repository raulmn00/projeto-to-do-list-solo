import './App.css';
import { Header } from './components/Header/Header.jsx';
import { ConteudoPrincipal } from './components/ConteudoPrincipal/ConteudoPrincipal.jsx';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';

export function App() {
	const [paletas, setPaletas] = useState([]);
	return (
		<>
			<div className="container-to-do-list">
				<div className="header-to-do-list">
					<Header setPaletasState={setPaletas} />
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
