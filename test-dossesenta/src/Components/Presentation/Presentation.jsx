import React from 'react';
import './Presentation.scss';

export default function Presentation() {
	return (
		<div className="container-fluid presentantion">
			<div className="logo">SOUNDNEXT</div>
			<div className="presentation-text-left">
				MUSICAL PRODUCTION FOR THE DIGITAL AGE <span>MASTERING</span>
			</div>
			<div className="presentation-text-right">
				<span>PRODUCTION</span>
				<span>COMPOSING FOR FILM</span>
				<span>THE ART OF MUSIC</span>
			</div>
			<img className="logo-sound" src="img/presentation/STEP 3 · MAIN LOGO IN NEGATIVE.png" alt="logo" />
			<div className="presentantion-down">
				<button className="button">
					<div className="button-text">
						A <span className="font-weight-bold">NEW WAY</span> TO LEARN MUSIC
					</div>
				</button>
				<div className="information-scroll">Scroll down to discover more_</div>
			</div>
		</div>
	);
}
