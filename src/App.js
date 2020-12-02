import { StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Boots from './Screens/Boots';
import Mugs from './Screens/Mugs';
import Scarfs from './Screens/Scarfs';

const { default: LandingPage } = require('./Screens/LandingPage');

function App() {
	return (
		<div className='App' style={{ fontFamily: 'Rubik' }}>
			<StylesProvider injectFirst>
				<BrowserRouter>
					<Navbar />
					<LandingPage />
					<Mugs />
					<Boots />
					<Scarfs />
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
}

export default App;
