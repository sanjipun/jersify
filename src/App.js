import { StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

const { default: LandingPage } = require('./Screens/LandingPage');

function App() {
	return (
		<div className='App' style={{ fontFamily: 'Rubik' }}>
			<StylesProvider injectFirst>
				<Navbar />
				<BrowserRouter>
					<Switch>
						<Route path='/' exact component={LandingPage} />
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	);
}

export default App;
