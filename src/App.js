import React from 'react';

import { Header, Footer } from './components';
import Routes from './Routes';

import './style.css';

const App = () => {
    return (
        <div>
            <Header />
            <Routes />
			<Footer />
        </div>
    );
};

export default App;