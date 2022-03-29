import React from 'react';
import Tilty from 'react-tilty';
import brain from './Logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilty className="Tilty br2 shadow-2" style={{ height: 150, width: 150 }}>
				<div className="pa3">
				   <img alt='logo' src={brain}/>
				</div>
			</Tilty>
		</div>
	);
}

export default Logo;